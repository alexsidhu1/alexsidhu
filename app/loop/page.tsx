import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideCapture from "../components/GuideCapture";
import { getResource } from "../lib/resources";

export const metadata: Metadata = {
  title: "The Verification Loop",
  alternates: { canonical: "/loop" },
  openGraph: { title: "The Verification Loop", description: "Give Claude a way to check its own work, and keep it fixing until the check passes.", url: "/loop" },
  description:
    "The habit the creator of Claude Code calls the most important one: give Claude a way to check its own work. How to set it up for code, websites and everyday work, and the second loop that stops the same mistake twice.",
};

export default function LoopPage() {
  const guide = getResource("give-claude-a-verification-loop");
  if (!guide) notFound();

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

        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-16 md:py-24">
        <div className="rounded-2xl border border-warm-border/70 bg-cream/70 backdrop-blur-md shadow-[0_10px_40px_-12px_rgba(28,25,23,0.13)] p-8 md:p-12">
          <div className="mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-warm-accent mb-6">
              Free guide
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-warm-text leading-tight mb-6">
              <span className="bg-warm-accent/25 [box-decoration-break:clone] [-webkit-box-decoration-break:clone] rounded-[4px] px-2 py-0.5 -mx-1 leading-[1.35]">
                The Verification Loop
              </span>
            </h1>
            <p className="text-lg text-warm-muted leading-relaxed">
              The habit the creator of Claude Code calls the most important
              one: give Claude a way to check its own work, and the quality of
              what comes back goes up two to three times. Here&apos;s how to set
              it up for your code, your website and your everyday work, plus
              the second loop that stops Claude repeating the same mistake.
              Drop your email and the guide unlocks right here.
            </p>
          </div>

          <hr className="border-warm-border mb-10" />

          <GuideCapture
            content={guide.content}
            highlights={guide.highlights}
            source="loop-landing"
            buttonLabel="Get the guide"
          />
        </div>
      </main>

      <footer className="border-t border-warm-border">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <span className="text-sm text-warm-muted">© 2026 Alex Sidhu</span>
          <Link
            href="/"
            className="text-sm text-warm-muted hover:text-warm-text transition-colors"
          >
            alexsidhu.com
          </Link>
        </div>
      </footer>
    </div>
  );
}
