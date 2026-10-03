import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideCapture from "../components/GuideCapture";
import { getResource } from "../lib/resources";

const title = "The AI Video Watchlist";
const description = "Three free videos on how AI agents work, building your own AI executive assistant and how LLMs work. Curated by Alex Sidhu.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/videos" },
  openGraph: { title, description, url: "/videos", type: "website" },
  twitter: { card: "summary", title, description },
};

const videos = [
  { step: "Understand agents", title: "How AI agents & Claude skills work (Clearly Explained)", creator: "Greg Isenberg with Ras Mic", note: "Context windows, what a skill really is, and why the setup around a model matters more than the model." },
  { step: "Build your assistant", title: "Turn Claude Code Into Your Executive Assistant in 27 Mins", creator: "Nate Herk", note: "A working AI executive assistant, built in phases: project, context, skills, then growing it over time." },
  { step: "Go under the hood", title: "[1hr Talk] Intro to Large Language Models", creator: "Andrej Karpathy", note: "What an LLM is, how it is trained and where it is heading. The mental model behind everything you just built." },
];

export default function VideosPage() {
  const guide = getResource("the-ai-video-watchlist");
  if (!guide) notFound();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(139,107,74,0.12),transparent_65%)]">
      <header className="max-w-3xl mx-auto px-6 py-7 flex items-center justify-between border-b border-warm-border">
        <span className="font-serif text-lg text-warm-text">Alex Sidhu</span>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.16em] text-warm-muted">The learning shelf / 03</span>
      </header>
      <main className="max-w-3xl mx-auto px-6 pt-14 sm:pt-20 pb-16">
        <p className="text-xs uppercase tracking-[0.18em] text-warm-accent mb-6">Free video collection · Curated by Alex</p>
        <h1 className="font-serif text-5xl sm:text-6xl font-medium leading-[1.12] tracking-tight max-w-2xl">Understand AI, then build with it.<br /><span className="text-warm-accent">Three videos.</span></h1>
        <p className="mt-7 text-lg leading-relaxed text-warm-muted max-w-xl">Learn how AI agents work. Build your own AI executive assistant. Then go under the hood on how LLMs work. About two hours, one watchlist, a clear place to start.</p>

        <section className="mt-10 rounded-2xl border border-warm-border bg-cream/90 p-6 sm:p-9 shadow-[0_16px_48px_-28px_rgba(28,25,23,0.25)]" aria-labelledby="capture-title">
          <p className="text-xs uppercase tracking-[0.16em] text-warm-accent mb-3">The AI Video Watchlist</p>
          <h2 id="capture-title" className="font-serif text-2xl sm:text-3xl mb-3">Your next three watches, sorted.</h2>
          <p className="text-warm-muted leading-relaxed mb-6">Enter your email to unlock all three videos here, in the order below.</p>
          <GuideCapture content={guide.content} highlights={guide.highlights} source="videos-landing" buttonLabel="Get the videos" />
        </section>

        <section className="mt-14" aria-labelledby="watchlist-title">
          <div className="flex items-center justify-between border-b border-warm-border pb-5">
            <h2 id="watchlist-title" className="font-serif text-2xl">Inside the watchlist</h2>
            <span className="text-xs uppercase tracking-widest text-warm-muted">01 → 03</span>
          </div>
          <ol className="divide-y divide-warm-border">
            {videos.map((video, i) => (
              <li key={video.title} className="flex gap-5 sm:gap-8 py-7">
                <span aria-hidden="true" className="font-serif text-3xl text-warm-accent/60 pt-1">0{i + 1}</span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-warm-accent mb-2">{video.step}</p>
                  <h3 className="font-serif text-xl sm:text-2xl leading-snug">{video.title}</h3>
                  <p className="text-sm text-warm-accent mt-2">{video.creator}</p>
                  <p className="text-warm-muted leading-relaxed mt-3 max-w-lg">{video.note}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-warm-muted leading-relaxed border-t border-warm-border pt-5">These videos are freely available on YouTube and belong to their respective creators. I&apos;ve collected them here so you have one place to start.</p>
        </section>
      </main>
      <footer className="max-w-3xl mx-auto border-t border-warm-border px-6 py-7 text-xs text-warm-muted flex flex-wrap gap-3 justify-between"><span>© 2026 Alex Sidhu</span><span>Built by Alex Sidhu, Whitehorse AI.</span></footer>
    </div>
  );
}
