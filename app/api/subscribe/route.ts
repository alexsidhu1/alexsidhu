import { NextResponse } from "next/server";

// Subscribes an email to the beehiiv publication.
// Secrets live in env vars (never in the repo): BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID.
export async function POST(req: Request) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.error("beehiiv: missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID");
    return NextResponse.json(
      { error: "Newsletter is not configured yet." },
      { status: 500 }
    );
  }

  let email: unknown;
  let utmSource: unknown;
  let referringSite: unknown;
  try {
    ({ email, utm_source: utmSource, referring_site: referringSite } =
      await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (
    typeof email !== "string" ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())
  ) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 }
    );
  }

  // Optional source tags let us see where a signup came from (e.g. the
  // Instagram second-brain funnel) in beehiiv. Default to the site.
  const utm_source =
    typeof utmSource === "string" && utmSource.trim()
      ? utmSource.trim()
      : "alexsidhu.com";
  const referring_site =
    typeof referringSite === "string" && referringSite.trim()
      ? referringSite.trim()
      : "alexsidhu.com";

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source,
          referring_site,
        }),
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("beehiiv error", res.status, detail);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("beehiiv request failed", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }
}
