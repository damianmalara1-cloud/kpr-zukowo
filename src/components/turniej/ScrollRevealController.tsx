"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR =
  ".scroll-fade-up, .scroll-3d-up, .scroll-3d-left, .scroll-3d-right, .scroll-zoom-in";

/**
 * Globalny kontroler reveal-on-scroll. Obserwuje wszystkie elementy z klasami scroll-*
 * i dodaje klasę `is-visible` gdy wjadą w viewport. CSS w globals.css obsługuje
 * przejścia (opacity + transform). Działa we WSZYSTKICH przeglądarkach (IO od 2017).
 *
 * Hydration-safe: ujawnia od razu elementy które są już widoczne w viewport po mount.
 */
export default function ScrollRevealController() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);

    // Jeśli brak IntersectionObserver — pokaż wszystko od razu
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Pre-pass: elementy już w viewport lub blisko — ujawnij natychmiast (bez animacji wjazdu)
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        // Elementy already visible at mount → animuj z lekkim opóźnieniem
        requestAnimationFrame(() => {
          requestAnimationFrame(() => el.classList.add("is-visible"));
        });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });

    // Bezpiecznik — po 5s wszystko ujawnij, gdyby observer się zaciął
    const safety = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
        .forEach((el) => el.classList.add("is-visible"));
    }, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return null;
}
