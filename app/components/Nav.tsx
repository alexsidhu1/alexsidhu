"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Thoughts", href: "/thoughts", isRoute: true },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-warm-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-serif text-base font-medium text-warm-text hover:text-warm-accent transition-colors"
        >
          Alex Sidhu
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-warm-muted hover:text-warm-text transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-warm-muted hover:text-warm-text transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <button
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8 text-warm-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-current transition-transform duration-200 origin-center ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-transform duration-200 origin-center ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-cream border-t border-warm-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-warm-muted hover:text-warm-text transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-warm-muted hover:text-warm-text transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
}
