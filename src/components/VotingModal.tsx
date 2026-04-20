"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const VOTING_END = new Date("2026-05-07T23:59:59+02:00");
const STORAGE_KEY = "voting_modal_dismissed_at";
const SUPPRESS_MS = 24 * 60 * 60 * 1000; // 24h
const SHOW_DELAY_MS = 4000;

export default function VotingModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (new Date() > VOTING_END) return;

    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (dismissed && Date.now() - parseInt(dismissed, 10) < SUPPRESS_MS) return;
    } catch {
      // localStorage niedostępne (SSR, prywatność) — pokaż mimo to
    }

    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const handleClose = () => {
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      // ignoruj
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="voting-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Zamknij"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        <div className="h-1.5 bg-red" />

        <div className="relative bg-navy text-white px-7 py-10 text-center overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,.1) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-red">
              Sezon 2026 · głosowanie
            </p>
            <h2
              id="voting-modal-title"
              className="mb-4 text-2xl md:text-3xl font-bold uppercase leading-tight"
            >
              Wybierz koszulkę,<br />w której zagramy
            </h2>
            <p className="mb-7 text-sm md:text-base text-white/85 leading-relaxed">
              25 projektów wykonanych przez dzieci z&nbsp;Żukowa. Zwycięska koszulka będzie
              główną inspiracją na przyszły sezon, a&nbsp;jej autor otrzyma koszulkę meczową
              na sezon 2026/2027. Głosowanie trwa do <strong>7 maja</strong>.
            </p>
            <Link
              href="https://glosowanie.kprzukowo.pl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="inline-block bg-red hover:bg-red-dark text-white font-bold text-sm uppercase tracking-[0.15em] px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Zagłosuj na projekt →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
