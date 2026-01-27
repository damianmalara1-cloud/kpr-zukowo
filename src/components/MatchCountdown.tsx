"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface MatchCountdownProps {
  matchDate: string;
  matchTime: string;
}

export default function MatchCountdown({ matchDate, matchTime }: MatchCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const [hours, minutes] = matchTime.split(":").map(Number);
      const targetDate = new Date(matchDate);
      targetDate.setHours(hours, minutes, 0, 0);

      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [matchDate, matchTime]);

  if (!mounted) {
    return (
      <div className="flex justify-center gap-4 md:gap-6">
        {["DNI", "GODZ", "MIN", "SEK"].map((label) => (
          <div key={label} className="text-center">
            <div className="bg-navy text-white rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
              <span className="text-2xl md:text-4xl font-bold">--</span>
            </div>
            <span className="text-xs md:text-sm text-gray-500 mt-2 block font-medium">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: "DNI" },
    { value: timeLeft.hours, label: "GODZ" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEK" },
  ];

  return (
    <div className="flex justify-center gap-3 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="bg-navy text-white rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px] shadow-lg transform hover:scale-105 transition-transform">
            <span className="text-2xl md:text-4xl font-bold tabular-nums">
              {unit.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-gray-500 mt-2 block font-medium tracking-wider">
            {unit.label}
          </span>
          {index < timeUnits.length - 1 && (
            <span className="hidden" aria-hidden="true">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
