interface Match {
  date: string;
  time: string;
  home: string;
  away: string;
  isKpr: boolean;
  result: { home: number; away: number } | null;
}

interface MatchScheduleProps {
  matches: Match[];
}

const DAY_NAMES: Record<string, string> = {
  "2026-05-22": "Piątek 22 maja",
  "2026-05-23": "Sobota 23 maja",
  "2026-05-24": "Niedziela 24 maja",
};

function shorten(name: string): string {
  const map: Record<string, string> = {
    "KPR Fit Dieta Żukowo": "KPR Żukowo",
    "SPR PURINA Kąty Wrocławskie": "PURINA Kąty Wr.",
    "KSSPR Końskie": "KSSPR Końskie",
    "MKS Olimpia MEDEX Piekary Śląskie": "Olimpia Piekary Śl.",
  };
  return map[name] || name;
}

export default function MatchSchedule({ matches }: MatchScheduleProps) {
  const grouped = matches.reduce<Record<string, Match[]>>((acc, m) => {
    (acc[m.date] ||= []).push(m);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(grouped).map(([date, dayMatches]) => (
        <div key={date}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 flex items-baseline gap-3">
            <span className="text-red">●</span>
            {DAY_NAMES[date] || date}
          </h3>

          <div className="space-y-3">
            {dayMatches.map((m, i) => (
              <div
                key={`${m.date}-${m.time}-${i}`}
                className={`relative rounded-xl overflow-hidden transition-[background-color] ${
                  m.isKpr
                    ? "bg-gradient-to-r from-red/20 via-red/10 to-transparent border border-red/40"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {m.isKpr && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red" aria-hidden="true" />
                )}

                <div className="p-4 md:p-5 flex items-center gap-4 md:gap-6">
                  <div className="flex-shrink-0 text-center min-w-[60px]">
                    <div
                      className={`text-2xl md:text-3xl font-bold tabular-nums ${
                        m.isKpr ? "text-white" : "text-white/70"
                      }`}
                    >
                      {m.time}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-base md:text-lg font-semibold truncate ${
                        m.isKpr ? "text-white" : "text-white/85"
                      }`}
                    >
                      {shorten(m.home)} <span className="text-white/40 font-normal">vs</span>{" "}
                      {shorten(m.away)}
                    </div>
                    {m.isKpr && (
                      <div className="text-xs md:text-sm text-red font-semibold uppercase tracking-wider mt-1">
                        Mecz KPR
                      </div>
                    )}
                  </div>

                  {m.result ? (
                    <div className="flex-shrink-0 text-2xl md:text-3xl font-bold text-white tabular-nums">
                      {m.result.home}:{m.result.away}
                    </div>
                  ) : (
                    <div className="flex-shrink-0 text-xs md:text-sm text-white/40 uppercase tracking-wider">
                      Zaplanowany
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
