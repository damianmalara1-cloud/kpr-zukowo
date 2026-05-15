"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll globalny przez Lenis. Strona "płynie" przy scrollu — interpolowany
 * scroll position z lekkim friction. Klasyczne premium event landing UX.
 *
 * Disabled na touch (mobile native scroll jest lepszy).
 * Disabled gdy prefers-reduced-motion.
 */
export default function SmoothScrollProvider() {
  useEffect(() => {
    // Reduced motion → fallback do native scroll
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Touch devices → native (Lenis może psuć momentum scroll na iOS)
    if (window.matchMedia("(hover: none)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out expo
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
