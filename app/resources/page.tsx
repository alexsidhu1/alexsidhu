import Link from "next/link";
import type { Metadata } from "next";
import { resources } from "../lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free guides and tools on AI, building, and running a business, from Alex Sidhu.",
};

export default function ResourcesPage() {
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
            href="/"
            className="text-sm text-warm-muted hover:text-warm-text transition-colors"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-20 md:py-28">
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-warm-muted mb-4">
            Free
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-warm-text">
            Resources
          </h1>
        </div>

        <div className="border-t border-warm-border">
          {resources.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10 py-7 border-b border-warm-border"
            >
              <span className="text-sm text-warm-muted md:w-44 shrink-0">
                Guide
              </span>
              <div>
                <h2 className="font-serif text-xl md:text-2xl text-warm-text group-hover:text-warm-accent transition-colors mb-1">
                  {r.title}
                </h2>
                <p className="text-warm-muted text-sm leading-relaxed">
                  {r.excerpt}
                </p>
              </div>
            </Link>
          ))}
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
