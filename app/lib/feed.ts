import { posts as localPosts, type Post } from "./posts";

// Pulls newsletter editions live from beehiiv and merges them with the
// local essays in posts.ts. Beehiiv is the source of truth for editions;
// local posts.ts is the source of truth for standalone essays.

const API_BASE = "https://api.beehiiv.com/v2";

// Manually pin the displayed date for specific beehiiv posts (beehiiv's
// publish_date isn't always the date we want shown on the site).
const DATE_OVERRIDES: Record<string, string> = {
  "the-inaugural-newsletter": "2026-06-12",
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  source: "local" | "beehiiv";
};

type BeehiivPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  html: string;
};

export type FullPost =
  | (Post & { source: "local" })
  | (BeehiivPost & { source: "beehiiv" });

function unixToDate(value: unknown): string {
  return typeof value === "number"
    ? new Date(value * 1000).toISOString().slice(0, 10)
    : "";
}

// beehiiv's free_web content is a full styled HTML document. Strip the
// document chrome + all of beehiiv's styling so our own theme (the
// `.post-html` rules in globals.css) controls the look, leaving just the
// semantic content (headings, paragraphs, images, lists, links).
function cleanHtml(html: string): string {
  return html
    .replace(/<!DOCTYPE[^>]*>/gi, "")
    .replace(/<head[\s\S]*?<\/head>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<link[^>]*>/gi, "")
    .replace(/<meta[^>]*>/gi, "")
    .replace(/<\/?(?:html|body)[^>]*>/gi, "")
    .replace(/\s(?:style|class|id)=(["'])(?:(?!\1).)*\1/gi, "")
    // strip the recurring newsletter onboarding preamble (the "Hey there …
    // you're receiving this because … let's get into it" greeting that makes
    // sense in an email but not on the site). Scoped to that exact block:
    // only fires when a paragraph opens with "Hey there" and the block closes
    // with "let's get into it", so editions without it are left untouched.
    // Also drops the divider that separated the preamble from the body.
    .replace(
      /<p[^>]*>\s*Hey there[\s\S]*?let[’']s get into it[^<]*<\/p>\s*(?:<hr[^>]*\/?>\s*)?/i,
      ""
    )
    // demote content h1s to h2 (the page title is the only h1)
    .replace(/<h1[^>]*>/gi, "<h2>")
    .replace(/<\/h1>/gi, "</h2>")
    // beehiiv renders image captions as <div><span><p>caption</p></span></div>
    // right after the <img>, which our theme would show as normal body text.
    // Wrap image + caption in a <figure>/<figcaption> so it's styled as a
    // caption (small, centered, muted — see globals.css).
    .replace(
      /(<img[^>]*>)\s*<div>\s*<span><p>([\s\S]*?)<\/p><\/span>\s*<\/div>/gi,
      "<figure>$1<figcaption>$2</figcaption></figure>"
    )
    // any remaining caption nodes not directly after an image
    .replace(
      /<div>\s*<span><p>([\s\S]*?)<\/p><\/span>\s*<\/div>/gi,
      "<figcaption>$1</figcaption>"
    )
    // Convert beehiiv's Tella bookmark card into a live Tella iframe embed.
    // beehiiv bakes in a SIGNED, time-limited thumbnail URL that 403s after a
    // few days; the /embed player always serves the current thumbnail + an
    // inline player and never expires. Handles the card (a <div> wrapping the
    // Tella link, optionally followed by the stale thumbnail <img>), then any
    // bare Tella link, then drops any leftover expired Tella image.
    .replace(
      /<div>(?:(?!<\/div>)[\s\S])*?https?:\/\/www\.tella\.tv\/video\/(vid_[a-z0-9]+)[\s\S]*?<\/div>\s*(?:<img[^>]*tella[^>]*>\s*)?/gi,
      '<iframe src="https://www.tella.tv/video/$1/embed" loading="lazy" allowfullscreen></iframe>'
    )
    .replace(
      /<a[^>]*href="https?:\/\/www\.tella\.tv\/video\/(vid_[a-z0-9]+)[^"]*"[^>]*>[\s\S]*?<\/a>/gi,
      '<iframe src="https://www.tella.tv/video/$1/embed" loading="lazy" allowfullscreen></iframe>'
    )
    .replace(/<img[^>]*src="[^"]*tella\.tv[^"]*"[^>]*>/gi, "")
    // beehiiv website bookmark cards render as a verbose stack of links
    // (title + full description + source, plus the image). Collapse every
    // card to a clean, styled card: keep the preview image (if any) and just
    // the title. Cards with a real image (Spokenly, the Guardian) become
    // image + title; cards with no image (Cairn — beehiiv leaves an empty
    // <img src=""/> placeholder, which a non-empty src check ignores) become
    // a title + domain link.
    .replace(
      /<div><a href="(https?:\/\/[^"]+)"[^>]*target="_blank"[^>]*>((?:(?!<\/a>)[\s\S])*?)<\/a><\/div>/gi,
      (full, url, inner) => {
        const t = inner.match(/<p>\s*([^<]+?)\s*<\/p>/i);
        const title = t ? t[1].trim() : "Visit site";
        const imgMatch = inner.match(/<img[^>]+src="([^"]+)"[^>]*>/i);
        const img = imgMatch ? imgMatch[1] : "";
        if (img) {
          return `<a class="site-card site-card--img" href="${url}" target="_blank" rel="noopener noreferrer"><img src="${img}" alt="" loading="lazy"><span class="site-card-title">${title}</span></a>`;
        }
        const domain = url.replace(/^https?:\/\//, "").replace(/[/?#].*$/, "");
        return `<a class="site-card" href="${url}" target="_blank" rel="noopener noreferrer"><span class="site-card-title">${title}</span><span class="site-card-domain">${domain}</span></a>`;
      }
    )
    // strip beehiiv's "Powered by beehiiv" footer (a divider + a link whose
    // host is beehiiv.com). Host-scoped so content links that merely carry a
    // beehiiv.com utm_source in their query are left untouched.
    .replace(
      /(?:<br\s*\/?>\s*)*(?:<hr\s*\/?>\s*)*<a[^>]*href="https?:\/\/(?:www\.)?beehiiv\.com[^"]*"[^>]*>\s*Powered by beehiiv\s*<\/a>/gi,
      ""
    )
    // tidy up any empty wrapper the footer left behind
    .replace(/<div>\s*(?:<br\s*\/?>\s*|<hr\s*\/?>\s*)*<\/div>\s*$/gi, "")
    .replace(/<div>\s*<\/div>/gi, "")
    .trim();
}

async function fetchBeehiiv(): Promise<BeehiivPost[]> {
  const key = process.env.BEEHIIV_API_KEY;
  const pub = process.env.BEEHIIV_PUBLICATION_ID;
  if (!key || !pub) return [];

  try {
    const res = await fetch(
      `${API_BASE}/publications/${pub}/posts?status=confirmed&limit=100&order_by=publish_date&direction=desc&expand[]=free_rss_content&expand[]=free_web_content`,
      {
        headers: { Authorization: `Bearer ${key}` },
        // RSS content is the clean article body (no page header/footer/widgets);
        // web content is the full styled page. Prefer RSS, fall back to web.
        next: { revalidate: 300 }, // refresh from beehiiv every 5 min
      }
    );
    if (!res.ok) return [];

    const json: unknown = await res.json();
    const data =
      json && typeof json === "object" && "data" in json
        ? (json as { data: unknown }).data
        : null;
    if (!Array.isArray(data)) return [];

    const out: BeehiivPost[] = [];
    for (const raw of data as Array<Record<string, unknown>>) {
      const content = raw.content as
        | { free?: { rss?: unknown; web?: unknown } }
        | undefined;
      const html = content?.free?.rss ?? content?.free?.web;
      if (typeof raw.slug !== "string" || typeof html !== "string") continue;

      out.push({
        slug: raw.slug,
        title: typeof raw.title === "string" ? raw.title : "Untitled",
        date:
          DATE_OVERRIDES[raw.slug] ??
          (unixToDate(raw.publish_date) || unixToDate(raw.created)),
        excerpt:
          typeof raw.subtitle === "string"
            ? raw.subtitle
            : typeof raw.preview_text === "string"
              ? raw.preview_text
              : "",
        html: cleanHtml(html),
      });
    }
    return out;
  } catch {
    return [];
  }
}

function byDateDesc(a: PostMeta, b: PostMeta): number {
  if (a.date === b.date) return 0;
  return a.date < b.date ? 1 : -1;
}

export async function getAllPostMeta(): Promise<PostMeta[]> {
  const local: PostMeta[] = localPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    source: "local",
  }));
  const beehiiv: PostMeta[] = (await fetchBeehiiv()).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    source: "beehiiv",
  }));
  return [...local, ...beehiiv].sort(byDateDesc);
}

export async function getFullPost(slug: string): Promise<FullPost | null> {
  const local = localPosts.find((p) => p.slug === slug);
  if (local) return { ...local, source: "local" };
  const beehiiv = (await fetchBeehiiv()).find((p) => p.slug === slug);
  if (beehiiv) return { ...beehiiv, source: "beehiiv" };
  return null;
}
