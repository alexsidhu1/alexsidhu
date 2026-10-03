import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideCapture from "../components/GuideCapture";
import { getResource } from "../lib/resources";

const title = "Three Reads on the Future of AI";
const description = "AI 2027, Dwarkesh Patel and Leopold Aschenbrenner. Three free reads on the future of AI, curated by Alex Sidhu.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/articles" },
  openGraph: { title, description, url: "/articles", type: "website" },
  twitter: { card: "summary", title, description },
};

const articles = [
  {
    "step": "Explore the scenario",
    "title": "AI 2027",
    "creator": "Daniel Kokotajlo, Scott Alexander, Thomas Larsen, Eli Lifland & Romeo Dean",
    "note": "A detailed scenario of how AI could develop rapidly, with two possible endings."
  },
  {
    "step": "Question the timeline",
    "title": "Why I don’t think AGI is right around the corner",
    "creator": "Dwarkesh Patel",
    "note": "The case for longer timelines, focused on what AI still needs to learn on the job."
  },
  {
    "step": "Consider the bigger picture",
    "title": "Situational Awareness: The Decade Ahead",
    "creator": "Leopold Aschenbrenner",
    "note": "An essay series on superintelligence, the infrastructure behind it and the geopolitical stakes."
  }
];

export default function ArticlesPage() {
  const guide = getResource("three-reads-on-the-future-of-ai");
  if (!guide) notFound();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(139,107,74,0.12),transparent_65%)]">
      <header className="max-w-3xl mx-auto px-6 py-7 flex items-center justify-between border-b border-warm-border">
        <span className="font-serif text-lg text-warm-text">Alex Sidhu</span>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.16em] text-warm-muted">The learning shelf / 02</span>
      </header>
      <main className="max-w-3xl mx-auto px-6 pt-14 sm:pt-20 pb-16">
        <p className="text-xs uppercase tracking-[0.18em] text-warm-accent mb-6">Free reading collection · Curated by Alex</p>
        <h1 className="font-serif text-5xl sm:text-6xl font-medium leading-[1.12] tracking-tight max-w-2xl">Where is AI heading?<br /><span className="text-warm-accent">Read these three.</span></h1>
        <p className="mt-7 text-lg leading-relaxed text-warm-muted max-w-xl">How fast could AI change the world? What might slow it down? Three perspectives worth reading together, so you can form your own view.</p>

        <section className="mt-10 rounded-2xl border border-warm-border bg-cream/90 p-6 sm:p-9 shadow-[0_16px_48px_-28px_rgba(28,25,23,0.25)]" aria-labelledby="capture-title">
          <p className="text-xs uppercase tracking-[0.16em] text-warm-accent mb-3">Three Reads on the Future of AI</p>
          <h2 id="capture-title" className="font-serif text-2xl sm:text-3xl mb-3">Your next three reads, sorted.</h2>
          <p className="text-warm-muted leading-relaxed mb-6">Enter your email to unlock all three links here, in the order below.</p>
          <GuideCapture content={guide.content} highlights={guide.highlights} source="articles-landing" buttonLabel="Get the links" />
        </section>

        <section className="mt-14" aria-labelledby="reading-list-title">
          <div className="flex items-center justify-between border-b border-warm-border pb-5">
            <h2 id="reading-list-title" className="font-serif text-2xl">Inside the reading list</h2>
            <span className="text-xs uppercase tracking-widest text-warm-muted">01 → 03</span>
          </div>
          <ol className="divide-y divide-warm-border">
            {articles.map((article, i) => (
              <li key={article.title} className="flex gap-5 sm:gap-8 py-7">
                <span aria-hidden="true" className="font-serif text-3xl text-warm-accent/60 pt-1">0{i + 1}</span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-warm-accent mb-2">{article.step}</p>
                  <h3 className="font-serif text-xl sm:text-2xl leading-snug">{article.title}</h3>
                  <p className="text-sm text-warm-accent mt-2">{article.creator}</p>
                  <p className="text-warm-muted leading-relaxed mt-3 max-w-lg">{article.note}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-warm-muted leading-relaxed border-t border-warm-border pt-5">These pieces are freely available from their original publishers and belong to their authors. Published in 2024 and 2025, they offer different views on AI&apos;s future. The third is an essay series.</p>
        </section>
      </main>
      <footer className="max-w-3xl mx-auto border-t border-warm-border px-6 py-7 text-xs text-warm-muted flex flex-wrap gap-3 justify-between"><span>© 2026 Alex Sidhu</span><span>Built by Alex Sidhu, Whitehorse AI.</span></footer>
    </div>
  );
}
