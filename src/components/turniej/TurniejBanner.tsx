"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MiniCountdown from "./MiniCountdown";
import data from "@/data/turniej-mistrzow.json";

const HIDE_AFTER = new Date("2026-05-25T00:00:00").getTime();

export default function TurniejBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(Date.now() < HIDE_AFTER);
  }, []);

  if (!visible) return null;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-black text-white"
      aria-label="Turniej Mistrzów — banner"
    >
      {/* Decorative red glow */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 bg-red/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-20 w-96 h-96 bg-red/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          {/* Lewa kolumna — tekst */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex w-2 h-2 rounded-full bg-red animate-pulse-subtle" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-red">
                Wydarzenie · 22-24 maja 2026
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-3 text-white">
              Turniej Mistrzów <span className="text-red">·</span> Kielce
            </h2>

            <p className="text-base md:text-lg text-white/80 mb-6 max-w-2xl">
              KPR Żukowo gra o awans do Ligi Centralnej. Trzy dni, trzy mecze, jeden awans —
              bez dogrywek.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/turniej-mistrzow"
                className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-semibold py-3 px-7 rounded-lg shadow-lg shadow-red/20 transition-[transform,background-color,box-shadow] hover:scale-105"
              >
                Zobacz szczegóły
                <span aria-hidden="true">→</span>
              </Link>

              <span className="text-sm text-white/60">
                {data.teams.length} drużyny · {data.matches.length} mecze · 1 awans
              </span>
            </div>
          </div>

          {/* Prawa kolumna — countdown */}
          <div className="lg:border-l lg:border-white/10 lg:pl-12">
            <div className="text-xs md:text-sm uppercase tracking-wider text-white/60 font-semibold mb-3">
              Do pierwszego meczu KPR
            </div>
            <MiniCountdown
              targetDate={data.firstKprMatch.date}
              targetTime={data.firstKprMatch.time}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
