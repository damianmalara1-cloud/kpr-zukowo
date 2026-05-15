"use client";

import { useRef, useCallback, type ReactNode } from "react";

interface Card3DTiltProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // stopnie obrotu maksymalnego (default 12)
}

/**
 * Mouse-tracking 3D tilt — obraca dziecko w perspektywie wokół kursora.
 * Disabled na touch (matchMedia hover: none → bez efektu).
 * Bez deps, bez state — tylko ref + raw DOM transform.
 */
export default function Card3DTilt({ children, className = "", maxTilt = 12 }: Card3DTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 → 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotX = -y * maxTilt * 2;
      const rotY = x * maxTilt * 2;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(20px)`;
      });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
