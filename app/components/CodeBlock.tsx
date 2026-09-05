"use client";

import { useState, type ReactNode } from "react";

// Pull the plain text out of a react-markdown <code> subtree so the copy
// button copies exactly what the reader sees.
function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: ReactNode } }).props;
    return textOf(props?.children);
  }
  return "";
}

/**
 * Fenced code block with a one-click copy button. Used for both shell
 * commands and the prompts readers paste straight into Claude Code.
 */
export default function CodeBlock({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(textOf(children).replace(/\n$/, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="relative my-6 group">
      <pre className="bg-cream-dark rounded-md px-4 py-3 pr-20 overflow-x-auto text-[0.88em] leading-[1.7] [&_code]:bg-transparent [&_code]:p-0 [&_code]:whitespace-pre">
        {children}
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy to clipboard"
        className="absolute top-2 right-2 rounded border border-warm-border bg-cream/90 px-2.5 py-1 text-xs tracking-wide text-warm-muted hover:text-warm-text hover:border-warm-accent transition-colors"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
