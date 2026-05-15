"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface HeroParallaxContentProps {
  children: ReactNode;
  className?: string;
}

/**
 * Hero content scroll parallax — gdy scrollujesz w dół, content rozpływa się
 * (fade + scale + blur), tworząc efekt że hero "zostaje za Tobą".
 * JS-based scroll listener (rAF throttled).
 */
export default function HeroParallaxContent({ children, className = "" }: HeroParallaxContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const scrollY = window.scrollY;
        const triggerHeight = window.innerHeight * 0.7;
        // 0..1 — progres przewijania w obrębie hero
        const progress = Math.max(0, Math.min(1, scrollY / triggerHeight));

        const opacity = 1 - progress * 0.85;
        const scale = 1 - progress * 0.15;
        const translateY = -progress * 100;
        const blur = progress * 8;

        el.style.opacity = `${opacity}`;
        el.style.transform = `translateY(${translateY}px) scale(${scale})`;
        el.style.filter = `blur(${blur}px)`;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
