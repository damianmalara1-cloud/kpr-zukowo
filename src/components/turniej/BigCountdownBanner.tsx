"use client";

import { useEffect, useState } from "react";

interface BigCountdownBannerProps {
  targetDate: string;
  targetTime: string;
  label?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Gigantic countdown na pełnoszerokościowym banner — FIFA WC26 vibe.
 * "26 : 23 : 19 : 16" w max display typo, biały na red/navy.
 */
export default function BigCountdownBanner({
  targetDate,
  targetTime,
  label = "Do startu turnieju",
}: BigCountdownBannerProps) {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calc = (): TimeLeft | null => {
      const [h, m] = targetTime.split(":").map(Number);
      const target = new Date(targetDate);
      target.setHours(h, m, 0, 0);
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return null;
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTime(calc());
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [targetDate, targetTime]);

  const units = time
    ? [time.days, time.hours, time.minutes, time.seconds]
    : ["--", "--", "--", "--"];
  const labels = ["DNI", "GODZ", "MIN", "SEK"];

  return (
    <section className="relative bg-red text-white overflow-hidden py-16 md:py-24">
      {/* Decoration: pionowe linie subtle */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 100%",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-8 text-white/80">
          {label}
        </p>

        <div className="flex items-baseline justify-center gap-2 md:gap-6 lg:gap-10 font-display tabular-nums">
          {units.map((value, idx) => (
            <div key={labels[idx]} className="text-center">
              <div className="text-[clamp(4rem,16vw,14rem)] leading-none">
                {typeof value === "number" ? value.toString().padStart(2, "0") : value}
              </div>
              <div className="text-[10px] md:text-sm uppercase tracking-[0.3em] mt-2 md:mt-4 text-white/70">
                {labels[idx]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
