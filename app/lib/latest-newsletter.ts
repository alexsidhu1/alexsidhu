/** Fetch metadata only: the full newsletter feed is too large to cache reliably. */
export async function getLatestNewsletterSlug(): Promise<string | null> {
  const key = process.env.BEEHIIV_API_KEY;
  const publication = process.env.BEEHIIV_PUBLICATION_ID;
  if (!key || !publication) return null;

  try {
    for (let page = 1; ; page++) {
      const query = new URLSearchParams({
        status: "confirmed", platform: "both", audience: "free",
        hidden_from_feed: "false", order_by: "publish_date",
        direction: "desc", limit: "100", page: String(page),
      });
      const response = await fetch(
        `https://api.beehiiv.com/v2/publications/${encodeURIComponent(publication)}/posts?${query}`,
        {
          headers: { Authorization: `Bearer ${key}` },
          next: { revalidate: 60 },
          signal: AbortSignal.timeout(8000),
        },
      );
      if (!response.ok) return null;
      const result = await response.json();
      if (!Array.isArray(result.data)) return null;
      const now = Date.now() / 1000;
      const eligible = result.data.filter((post: Record<string, unknown>) =>
        post.status === "confirmed" && post.platform === "both" &&
        post.audience === "free" && post.hidden_from_feed !== true &&
        typeof post.slug === "string" && /^[a-zA-Z0-9_-]+$/.test(post.slug) &&
        typeof post.publish_date === "number" && Number.isFinite(post.publish_date) &&
        post.publish_date > 0 && post.publish_date <= now,
      ).sort((a: { publish_date: number }, b: { publish_date: number }) => b.publish_date - a.publish_date);
      if (eligible.length) return eligible[0].slug;
      if (!Number.isInteger(result.total_pages) || page >= result.total_pages || !result.data.length) return null;
    }
  } catch {
    // An archive remains useful during an API outage; do not expose API details.
    return null;
  }
}
