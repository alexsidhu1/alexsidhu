import { NextResponse } from "next/server";
import { getLatestNewsletterSlug } from "../lib/latest-newsletter";

export async function GET(request: Request) {
  const slug = await getLatestNewsletterSlug();
  const destination = new URL(slug ? `/thoughts/${slug}` : "/thoughts", request.url);
  // Preserve newsletter attribution without allowing query parameters to select a destination.
  destination.search = new URL(request.url).search;
  const response = NextResponse.redirect(destination, 307);
  // Never pin an email reader or CDN to an old edition via a cached redirect.
  response.headers.set("Cache-Control", "no-store, max-age=0");
  return response;
}
