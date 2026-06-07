"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="font-serif text-2xl md:text-3xl font-medium text-warm-text leading-tight mt-16 mb-6">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="font-serif text-xl font-medium text-warm-text mt-10 mb-4">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-warm-muted leading-[1.9] mb-6">{children}</p>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal pl-6 space-y-3 mb-6 text-warm-muted leading-[1.9] marker:text-warm-accent">
      {children}
    </ol>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc pl-6 space-y-3 mb-6 text-warm-muted leading-[1.9] marker:text-warm-accent">
      {children}
    </ul>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="pl-1">{children}</li>
  ),
  hr: () => <hr className="border-warm-border my-12" />,
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-medium text-warm-text">{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-warm-accent underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      className="rounded-lg border border-warm-border my-8 w-full"
    />
  ),
};

const UNLOCK_KEY = "as_unlocked";

export default function GatedPost({ slug }: { slug: string }) {
  const [checked, setChecked] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [content, setContent] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function loadContent() {
    const res = await fetch(`/api/post/${slug}`);
    if (res.ok) {
      const data = await res.json();
      setContent(data.content);
    }
  }

  useEffect(() => {
    const isUnlocked =
      typeof window !== "undefined" &&
      localStorage.getItem(UNLOCK_KEY) === "1";
    setUnlocked(isUnlocked);
    setChecked(true);
    if (isUnlocked) loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      localStorage.setItem(UNLOCK_KEY, "1");
      setUnlocked(true);
      await loadContent();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  // Avoid a flash of the gate before we've checked localStorage.
  if (!checked) return null;

  if (unlocked) {
    if (content === null) {
      return <p className="text-warm-muted">Loading...</p>;
    }
    return (
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    );
  }

  return (
    <div className="border border-warm-border rounded-xl p-8 md:p-12 bg-cream-dark/50 text-center">
      <p className="text-xs tracking-[0.2em] uppercase text-warm-muted mb-4">
        Members only
      </p>
      <h3 className="font-serif text-2xl md:text-3xl font-medium text-warm-text mb-3">
        Read the full piece
      </h3>
      <p className="text-warm-muted leading-relaxed mb-8 max-w-md mx-auto">
        Enter your email to unlock this post and everything else here. You&apos;ll
        also get new writing in your inbox. No spam, unsubscribe anytime.
      </p>
      <form onSubmit={onSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            disabled={status === "loading"}
            aria-label="Email address"
            className="flex-1 bg-cream border border-warm-border rounded-md px-4 py-3 text-warm-text placeholder:text-warm-muted focus:outline-none focus:border-warm-accent transition-colors disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-warm-text text-cream rounded-md px-6 py-3 font-medium hover:bg-warm-accent transition-colors disabled:opacity-60 shrink-0"
          >
            {status === "loading" ? "Unlocking..." : "Unlock"}
          </button>
        </div>
        {status === "error" && (
          <p className="mt-3 text-sm text-warm-accent">{message}</p>
        )}
      </form>
    </div>
  );
}
