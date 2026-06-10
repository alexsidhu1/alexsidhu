"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "site-sound-muted";

/**
 * Plays a short click sound on every click anywhere on the site. Includes a
 * small, unobtrusive mute toggle (bottom-right) whose state persists in
 * localStorage, so visitors who don't want the sound can switch it off.
 */
export default function ClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const mutedRef = useRef(false);

  // Read persisted preference once on mount.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const isMuted = stored === "true";
    setMuted(isMuted);
    mutedRef.current = isMuted;

    const audio = new Audio("/button-click.mp3");
    audio.preload = "auto";
    audio.volume = 0.35;
    audioRef.current = audio;
  }, []);

  // Click handler scoped to buttons and links only. Uses a fresh clone per
  // click so rapid clicks overlap cleanly instead of cutting each other off.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (mutedRef.current) return;
      const target = e.target as Element | null;
      if (!target?.closest?.('a, button, [role="button"], input[type="submit"]')) {
        return;
      }
      const base = audioRef.current;
      if (!base) return;
      const sfx = base.cloneNode() as HTMLAudioElement;
      sfx.volume = base.volume;
      void sfx.play().catch(() => {
        /* ignored: autoplay can reject before first user gesture */
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function toggleMute() {
    setMuted((prev) => {
      const next = !prev;
      mutedRef.current = next;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }

  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={muted ? "Unmute click sound" : "Mute click sound"}
      title={muted ? "Sound off" : "Sound on"}
      className="fixed bottom-5 right-5 z-[9998] flex h-9 w-9 items-center justify-center rounded-full border border-warm-border bg-cream/90 text-warm-muted backdrop-blur-sm transition-colors hover:text-warm-accent hover:border-warm-accent"
    >
      {muted ? (
        // muted icon
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <line x1="22" y1="9" x2="16" y2="15" />
          <line x1="16" y1="9" x2="22" y2="15" />
        </svg>
      ) : (
        // sound-on icon
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </svg>
      )}
    </button>
  );
}
