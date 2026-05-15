"use client";

import { useEffect, useState } from "react";

interface MiniCountdownProps {
  targetDate: string;
  targetTime: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export default function MiniCountdown({ targetDate, targetTime }: MiniCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const compute = (): TimeLeft | null => {
      const [h, m] = targetTime.split(":").map(Number);
      const target = new Date(targetDate);
      target.setHours(h, m, 0, 0);
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return null;
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
      };
    };

    setTimeLeft(compute());
    const id = setInterval(() => setTimeLeft(compute()), 60_000);
    return () => clearInterval(id);
  }, [targetDate, targetTime]);

  const units = timeLeft
    ? [
        { value: timeLeft.days, label: "DNI" },
        { value: timeLeft.hours, label: "GODZ" },
        { value: timeLeft.minutes, label: "MIN" },
      ]
    : [
        { value: "--", label: "DNI" },
        { value: "--", label: "GODZ" },
        { value: "--", label: "MIN" },
      ];

  return (
    <div className="flex gap-2 md:gap-3">
      {units.map((u) => (
        <div
          key={u.label}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-3 py-2 min-w-[58px] md:min-w-[70px] text-center"
        >
          <div className="text-2xl md:text-3xl font-bold text-white tabular-nums leading-none">
            {typeof u.value === "number" ? u.value.toString().padStart(2, "0") : u.value}
          </div>
          <div className="text-[10px] md:text-xs text-white/70 font-semibold tracking-wider mt-1">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
