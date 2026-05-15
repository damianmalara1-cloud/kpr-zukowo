"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

interface Team {
  name: string;
  shortName: string;
  city: string;
  color: string;
  logo: string;
  isKpr: boolean;
}

interface Match {
  date: string;
  time: string;
  home: string;
  away: string;
  isKpr: boolean;
  result: { home: number; away: number } | null;
}

interface VSBattleSliderProps {
  matches: Match[];
  teams: Team[];
  venue: string;
}

const DAY_NAMES: Record<string, string> = {
  "2026-05-22": "Piątek 22 maja",
  "2026-05-23": "Sobota 23 maja",
  "2026-05-24": "Niedziela 24 maja",
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

function useCountdown(date: string, time: string): TimeLeft | null {
  const [t, setT] = useState<TimeLeft | null>(null);
  useEffect(() => {
    const calc = () => {
      const [h, m] = time.split(":").map(Number);
      const target = new Date(date);
      target.setHours(h, m, 0, 0);
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return null;
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
      };
    };
    setT(calc());
    const id = setInterval(() => setT(calc()), 60_000);
    return () => clearInterval(id);
  }, [date, time]);
  return t;
}

function MatchCard({
  kpr,
  opponent,
  match,
  active,
  venue,
}: {
  kpr: Team;
  opponent: Team;
  match: Match;
  active: boolean;
  venue: string;
}) {
  const countdown = useCountdown(match.date, match.time);

  return (
    <div
      className={`relative w-full transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"
      }`}
      aria-hidden={!active}
    >
      {/* Gradient tła: pół KPR czerwony, pół opponent kolor */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `linear-gradient(90deg, ${kpr.color} 0%, transparent 35%, transparent 65%, ${opponent.color} 100%)`,
        }}
        aria-hidden="true"
      />
      {/* Diagonal split overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Glow orbs po bokach */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-72 h-72 rounded-full blur-3xl opacity-50"
        style={{ backgroundColor: kpr.color }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 w-72 h-72 rounded-full blur-3xl opacity-50"
        style={{ backgroundColor: opponent.color }}
        aria-hidden="true"
      />

      <div className="relative px-4 sm:px-6 py-12 md:py-16">
        {/* Match meta na górze */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-white/60">
            {DAY_NAMES[match.date]} · {match.time} · {venue}
          </p>
        </div>

        {/* HEAD-TO-HEAD layout */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* LEWA: KPR */}
          <div className="text-center md:text-right group">
            <div className="relative w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto md:ml-auto md:mr-0 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-60 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: kpr.color }}
                aria-hidden="true"
              />
              <div className="relative bg-white rounded-full w-full h-full p-3 md:p-4 shadow-2xl">
                <Image
                  src={kpr.logo}
                  alt={kpr.name}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 96px, 176px"
                />
              </div>
            </div>
            <p className="font-display text-base md:text-2xl lg:text-3xl text-white leading-tight">
              KPR Fit Dieta
              <br />
              Żukowo
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-white/50 mt-1">
              Pomorze
            </p>
          </div>

          {/* ŚRODEK: VS */}
          <div className="text-center">
            <div className="font-display text-4xl md:text-7xl lg:text-8xl text-red leading-none animate-pulse-subtle">
              VS
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 mt-2">
              Mecz
            </div>
          </div>

          {/* PRAWA: rywal */}
          <div className="text-center md:text-left group">
            <div className="relative w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto md:mr-auto md:ml-0 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-60 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: opponent.color }}
                aria-hidden="true"
              />
              <div className="relative bg-white rounded-full w-full h-full p-3 md:p-4 shadow-2xl">
                <Image
                  src={opponent.logo}
                  alt={opponent.name}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 96px, 176px"
                />
              </div>
            </div>
            <p className="font-display text-base md:text-2xl lg:text-3xl text-white leading-tight">
              {opponent.shortName}
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-white/50 mt-1">
              {opponent.city.split(",")[1]?.trim() || opponent.city}
            </p>
          </div>
        </div>

        {/* Countdown + result */}
        <div className="text-center mt-10 md:mt-14">
          {match.result ? (
            <div className="font-display text-5xl md:text-7xl text-white tabular-nums">
              {match.result.home} : {match.result.away}
            </div>
          ) : countdown ? (
            <div className="inline-flex items-baseline gap-3 md:gap-5 font-display tabular-nums">
              <div className="text-center">
                <span className="text-3xl md:text-5xl text-white">
                  {countdown.days.toString().padStart(2, "0")}
                </span>
                <span className="block text-[10px] md:text-xs text-white/50 uppercase tracking-wider mt-1">
                  Dni
                </span>
              </div>
              <span className="text-2xl md:text-4xl text-red">:</span>
              <div className="text-center">
                <span className="text-3xl md:text-5xl text-white">
                  {countdown.hours.toString().padStart(2, "0")}
                </span>
                <span className="block text-[10px] md:text-xs text-white/50 uppercase tracking-wider mt-1">
                  Godz
                </span>
              </div>
              <span className="text-2xl md:text-4xl text-red">:</span>
              <div className="text-center">
                <span className="text-3xl md:text-5xl text-white">
                  {countdown.minutes.toString().padStart(2, "0")}
                </span>
                <span className="block text-[10px] md:text-xs text-white/50 uppercase tracking-wider mt-1">
                  Min
                </span>
              </div>
            </div>
          ) : (
            <div className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
              Mecz zakończony
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VSBattleSlider({ matches, teams, venue }: VSBattleSliderProps) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const kprMatches = matches.filter((m) => m.isKpr);
  const kpr = teams.find((t) => t.isKpr);
  const total = kprMatches.length;

  const getOpponent = useCallback(
    (match: Match): Team | undefined => {
      const oppName = match.home === kpr?.name ? match.away : match.home;
      return teams.find((t) => t.name === oppName);
    },
    [kpr, teams]
  );

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  // Auto-advance co 6s, pause na hover
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || total <= 1) return;
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next, total]);

  if (!kpr || kprMatches.length === 0) return null;

  return (
    <section
      className="relative bg-black text-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Head-to-head mecze KPR Fit Dieta Żukowo"
    >
      {/* Header */}
      <div className="relative pt-20 md:pt-28 pb-4 text-center">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-red mb-4 scroll-fade-up">
          Head to Head
        </p>
        <h2 className="font-display text-huge text-white scroll-3d-up">
          Trzy mecze. <span className="text-red">Trzy bitwy.</span>
        </h2>
        <p className="text-base md:text-lg text-white/60 mt-4 scroll-fade-up">
          Mecz {index + 1} z {total}
        </p>
      </div>

      {/* Slider */}
      <div className="relative min-h-[600px] md:min-h-[700px] flex items-center scroll-3d-up">
        {kprMatches.map((match, i) => {
          const opponent = getOpponent(match);
          if (!opponent) return null;
          return (
            <MatchCard
              key={`${match.date}-${match.time}`}
              kpr={kpr}
              opponent={opponent}
              match={match}
              active={i === index}
              venue={venue}
            />
          );
        })}

        {/* Strzałki nawigacji */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Poprzedni mecz"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Następny mecz"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="relative flex justify-center gap-3 pb-16 md:pb-20">
          {kprMatches.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Mecz ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-12 bg-red" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
