import { posts as localPosts, type Post } from "./posts";

// Pulls newsletter editions live from beehiiv and merges them with the
// local essays in posts.ts. Beehiiv is the source of truth for editions;
// local posts.ts is the source of truth for standalone essays.

const API_BASE = "https://api.beehiiv.com/v2";

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
    .replace(/\sstyle="[^"]*"/gi, "")
    .replace(/\sclass="[^"]*"/gi, "")
    .trim();
}

async function fetchBeehiiv(): Promise<BeehiivPost[]> {
  const key = process.env.BEEHIIV_API_KEY;
  const pub = process.env.BEEHIIV_PUBLICATION_ID;
  if (!key || !pub) return [];

  try {
    const res = await fetch(
      `${API_BASE}/publications/${pub}/posts?status=confirmed&limit=100&order_by=publish_date&direction=desc&expand[]=free_web_content`,
      {
        headers: { Authorization: `Bearer ${key}` },
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
        | { free?: { web?: unknown } }
        | undefined;
      const html = content?.free?.web;
      if (typeof raw.slug !== "string" || typeof html !== "string") continue;

      out.push({
        slug: raw.slug,
        title: typeof raw.title === "string" ? raw.title : "Untitled",
        date: unixToDate(raw.publish_date) || unixToDate(raw.created),
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
