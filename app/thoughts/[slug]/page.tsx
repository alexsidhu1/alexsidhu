/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { getAllPostMeta, getFullPost } from "../../lib/feed";

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 className="font-serif text-2xl md:text-3xl font-medium text-warm-text leading-tight mt-16 mb-6">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-xl font-medium text-warm-text mt-10 mb-4">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-warm-muted leading-[1.9] mb-6">{children}</p>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-3 mb-6 text-warm-muted leading-[1.9] marker:text-warm-accent">
      {children}
    </ol>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-3 mb-6 text-warm-muted leading-[1.9] marker:text-warm-accent">
      {children}
    </ul>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  hr: () => <hr className="border-warm-border my-12" />,
  strong: ({ children }) => (
    <strong className="font-medium text-warm-text">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-warm-accent underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt || ""}
      loading="lazy"
      className="rounded-lg border border-warm-border my-8 w-full"
    />
  ),
};

export const revalidate = 300;

export async function generateStaticParams() {
  const metas = await getAllPostMeta();
  return metas.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getFullPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
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
  const post = await getFullPost(slug);

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

        {post.source === "beehiiv" ? (
          <div
            className="post-html"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        )}

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
