"use client";

import { useState } from "react";
import GuideBody from "./GuideBody";

type Status = "idle" | "loading" | "success" | "error";

// Email-gated capture for a lead magnet. Shows the highlights + a form.
// On a successful subscribe it reveals the full guide inline, plus a download.
export default function GuideCapture({
  content,
  highlights,
  source = "second-brain-guide",
}: {
  content: string;
  highlights: string[];
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          utm_source: "instagram",
          referring_site: source,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div>
        <div className="mb-12 rounded-lg border border-warm-border bg-cream-dark/50 px-5 py-4">
          <p className="text-warm-text font-medium leading-relaxed">
            You&apos;re in. The full guide is unlocked below, and you&apos;re on
            the newsletter. Bookmark this page so you can come back to it.
          </p>
        </div>
        <article>
          <GuideBody content={content} />
        </article>
      </div>
    );
  }

  return (
    <div>
      <ul className="space-y-3 mb-10">
        {highlights.map((h) => (
          <li key={h} className="flex gap-3 text-warm-muted leading-relaxed">
            <span
              aria-hidden
              className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-warm-accent"
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit} className="max-w-md">
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
            className="bg-warm-accent text-cream rounded-md px-6 py-3 font-medium hover:bg-warm-text transition-colors disabled:opacity-60 shrink-0"
          >
            {status === "loading" ? "Sending..." : "Send me the guide"}
          </button>
        </div>
        {status === "error" && (
          <p className="mt-3 text-sm text-warm-accent">{message}</p>
        )}
        <p className="mt-4 text-sm text-warm-muted leading-relaxed">
          You&apos;ll also get the newsletter. One useful email a week on AI for
          people running businesses. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
