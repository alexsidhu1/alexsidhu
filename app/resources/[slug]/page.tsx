import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GuideBody from "../../components/GuideBody";
import SubscribeForm from "../../components/SubscribeForm";
import { getResource, resources } from "../../lib/resources";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) return {};
  return { title: r.title, description: r.excerpt };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) notFound();

  return (
    <div className="relative min-h-full flex flex-col">
      {/* Ambient warm background so the page doesn't read flat */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_540px_at_50%_-8%,rgba(139,107,74,0.14),transparent_60%),radial-gradient(760px_520px_at_88%_16%,rgba(139,107,74,0.08),transparent_55%),radial-gradient(680px_600px_at_6%_94%,rgba(139,107,74,0.07),transparent_60%),linear-gradient(180deg,#FAF9F6_0%,#F1ECE4_100%)]"
      />
      <header className="border-b border-warm-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-base font-medium text-warm-text hover:text-warm-accent transition-colors"
          >
            Alex Sidhu
          </Link>
          <Link
            href="/resources"
            className="text-sm text-warm-muted hover:text-warm-text transition-colors"
          >
            ← All resources
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-16 md:py-24">
        <div className="rounded-2xl border border-warm-border/70 bg-cream/70 backdrop-blur-md shadow-[0_10px_40px_-12px_rgba(28,25,23,0.13)] p-8 md:p-12">
          <div className="mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-warm-accent mb-6">
              Free guide
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-warm-text leading-tight mb-6">
              <span className="bg-warm-accent/25 [box-decoration-break:clone] [-webkit-box-decoration-break:clone] rounded-[4px] px-2 py-0.5 -mx-1 leading-[1.35]">
                {r.title}
              </span>
            </h1>
            <p className="text-lg text-warm-muted leading-relaxed">
              {r.excerpt}
            </p>
          </div>

          <hr className="border-warm-border mb-12" />

          <article>
            <GuideBody content={r.content} />
          </article>

          <div className="mt-16 pt-10 border-t border-warm-border">
            <p className="text-xs tracking-[0.2em] uppercase text-warm-muted mb-4">
              Newsletter
            </p>
            <h2 className="font-serif text-2xl font-medium text-warm-text mb-4">
              Get the next one
            </h2>
            <p className="text-warm-muted leading-relaxed max-w-md mb-6">
              One useful email a week on AI for people running businesses.
              Unsubscribe anytime.
            </p>
            <SubscribeForm />
          </div>
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
