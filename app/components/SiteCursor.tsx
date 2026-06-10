"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

const INTERACTIVE = 'a, button, input, textarea, label, [role="button"], [data-cursor]';

/**
 * A custom cursor for the whole site: a small teal dot that tracks the pointer
 * exactly, plus a larger outlined ring that trails it with spring physics. Over
 * any interactive element the ring swells and fills, and a small arrow appears.
 *
 * Only active on fine-pointer (mouse) devices with motion enabled. On touch or
 * with prefers-reduced-motion it renders nothing and the native cursor is left
 * untouched.
 */
export default function SiteCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);

  // Dot tracks tightly; ring lags with a softer spring.
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 500, damping: 40, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;
    setEnabled(true);

    // Hide the native cursor everywhere while ours is active.
    const root = document.documentElement;
    root.classList.add("has-site-cursor");

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      const target = e.target as Element | null;
      setHovering(!!target?.closest?.(INTERACTIVE));
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onLeave = () => {
      dotX.set(-100);
      dotY.set(-100);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      root.classList.remove("has-site-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-warm-accent"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          backgroundColor: hovering
            ? "rgba(139,107,74,0.12)"
            : "rgba(139,107,74,0)",
          scale: down ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {/* Arrow that fades in over interactive elements */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-warm-accent text-[13px]"
          animate={{ opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          ↗
        </motion.span>
      </motion.div>

      {/* Tight-tracking dot (hidden while hovering an interactive element) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm-accent"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: hovering ? 0 : 1, scale: down ? 0.6 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
