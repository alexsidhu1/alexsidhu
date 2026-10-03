import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideCapture from "../components/GuideCapture";
import { getResource } from "../lib/resources";

const title = "The AI Podcast List";
const description = "Three free podcasts for getting good at AI: Acquired for the companies, All-In for the debates, Colin and Samir for the audience. Curated by Alex Sidhu.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/podcasts" },
  openGraph: { title, description, url: "/podcasts", type: "website" },
  twitter: { card: "summary", title, description },
};

const podcasts = [
  { step: "How we got here", title: "Acquired: the Google trilogy", creator: "Ben Gilbert & David Rosenthal", note: "How Google started, what it built, and why it became the breeding ground for most of the AI we use today." },
  { step: "What happens next", title: "All-In: the AI discussions", creator: "Chamath, Jason, Sacks & Friedberg", note: "Investors and founders debating the companies, the competition and where the money is going." },
  { step: "How you stand out", title: "The Colin and Samir Show", creator: "Colin Rosenblum & Samir Chaudry", note: "How creators build audiences and businesses. Why people actually watch matters as much as how you produce." },
];

export default function PodcastsPage() {
  const guide = getResource("the-ai-podcast-list");
  if (!guide) notFound();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(139,107,74,0.12),transparent_65%)]">
      <header className="max-w-3xl mx-auto px-6 py-7 flex items-center justify-between border-b border-warm-border">
        <span className="font-serif text-lg text-warm-text">Alex Sidhu</span>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.16em] text-warm-muted">The learning shelf / 04</span>
      </header>
      <main className="max-w-3xl mx-auto px-6 pt-14 sm:pt-20 pb-16">
        <p className="text-xs uppercase tracking-[0.18em] text-warm-accent mb-6">Free podcast collection · Curated by Alex</p>
        <h1 className="font-serif text-5xl sm:text-6xl font-medium leading-[1.12] tracking-tight max-w-2xl">Get terrifyingly good at AI.<br /><span className="text-warm-accent">Start with three podcasts.</span></h1>
        <p className="mt-7 text-lg leading-relaxed text-warm-muted max-w-xl">Acquired for the companies. All-In for the debates. Colin and Samir for the audience you&apos;re trying to reach. Free to listen, no course required.</p>

        <section className="mt-10 rounded-2xl border border-warm-border bg-cream/90 p-6 sm:p-9 shadow-[0_16px_48px_-28px_rgba(28,25,23,0.25)]" aria-labelledby="capture-title">
          <p className="text-xs uppercase tracking-[0.16em] text-warm-accent mb-3">The AI Podcast List</p>
          <h2 id="capture-title" className="font-serif text-2xl sm:text-3xl mb-3">Your next three listens, sorted.</h2>
          <p className="text-warm-muted leading-relaxed mb-6">Enter your email to unlock all three podcasts here, in the order below.</p>
          <GuideCapture content={guide.content} highlights={guide.highlights} source="podcasts-landing" buttonLabel="Get the podcasts" />
        </section>

        <section className="mt-14" aria-labelledby="watchlist-title">
          <div className="flex items-center justify-between border-b border-warm-border pb-5">
            <h2 id="watchlist-title" className="font-serif text-2xl">Inside the list</h2>
            <span className="text-xs uppercase tracking-widest text-warm-muted">01 → 03</span>
          </div>
          <ol className="divide-y divide-warm-border">
            {podcasts.map((podcast, i) => (
              <li key={podcast.title} className="flex gap-5 sm:gap-8 py-7">
                <span aria-hidden="true" className="font-serif text-3xl text-warm-accent/60 pt-1">0{i + 1}</span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-warm-accent mb-2">{podcast.step}</p>
                  <h3 className="font-serif text-xl sm:text-2xl leading-snug">{podcast.title}</h3>
                  <p className="text-sm text-warm-accent mt-2">{podcast.creator}</p>
                  <p className="text-warm-muted leading-relaxed mt-3 max-w-lg">{podcast.note}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-warm-muted leading-relaxed border-t border-warm-border pt-5">These podcasts are freely available and belong to their respective creators. I&apos;ve collected them here so you have one place to start.</p>
        </section>
      </main>
      <footer className="max-w-3xl mx-auto border-t border-warm-border px-6 py-7 text-xs text-warm-muted flex flex-wrap gap-3 justify-between"><span>© 2026 Alex Sidhu</span><span>Built by Alex Sidhu, Whitehorse AI.</span></footer>
    </div>
  );
}
