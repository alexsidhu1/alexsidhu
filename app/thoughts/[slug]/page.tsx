import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "../../lib/posts";
import GatedPost from "../../components/GatedPost";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b border-warm-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-base font-medium text-warm-text hover:text-warm-accent transition-colors"
          >
            Alex Sidhu
          </Link>
          <Link
            href="/thoughts"
            className="text-sm text-warm-muted hover:text-warm-text transition-colors"
          >
            ← All posts
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-sm text-warm-muted mb-6">{formatDate(post.date)}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-warm-text leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-warm-muted leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <hr className="border-warm-border mb-12" />

        <GatedPost slug={post.slug} />

        <div className="mt-16 pt-8 border-t border-warm-border">
          <Link
            href="/thoughts"
            className="text-sm text-warm-accent hover:underline underline-offset-4"
          >
            ← Back to all posts
          </Link>
        </div>
      </main>

      <footer className="border-t border-warm-border">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <span className="text-sm text-warm-muted">© 2026 Alex Sidhu</span>
        </div>
      </footer>
    </div>
  );
}
