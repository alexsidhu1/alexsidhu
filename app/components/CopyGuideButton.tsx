"use client";

import { useState } from "react";

type CopyState = "idle" | "copied" | "error";

export default function CopyGuideButton({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [state, setState] = useState<CopyState>("idle");

  async function copyGuide() {
    const markdown = `# ${title}\n\n${content}`;

    try {
      await navigator.clipboard.writeText(markdown);
      setState("copied");
      window.setTimeout(() => setState("idle"), 3000);
    } catch {
      setState("error");
    }
  }

  return (
    <div className="mb-12 rounded-xl border border-warm-border bg-cream-dark/45 px-5 py-5 sm:flex sm:items-center sm:justify-between sm:gap-5">
      <div className="mb-4 sm:mb-0">
        <p className="font-medium text-warm-text">Use this with your AI</p>
        <p className="mt-1 text-sm leading-relaxed text-warm-muted">
          Copy the complete guide as clean Markdown, then paste it into ChatGPT
          or Claude.
        </p>
      </div>
      <button
        type="button"
        onClick={copyGuide}
        className="w-full shrink-0 rounded-md bg-warm-accent px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-warm-text sm:w-auto"
        aria-live="polite"
      >
        {state === "copied"
          ? "Copied. Paste into ChatGPT"
          : state === "error"
            ? "Copy failed. Try again"
            : "Copy entire guide"}
      </button>
    </div>
  );
}
