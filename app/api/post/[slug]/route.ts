import { NextResponse } from "next/server";
import { getPost } from "../../../lib/posts";

// Serves a post's body to the client only after the gate is unlocked.
// Keeping the body out of the page HTML is what makes the gate real rather
// than cosmetic. (Lead-capture gate, not hard auth — see GatedPost.)
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ content: post.content });
}
