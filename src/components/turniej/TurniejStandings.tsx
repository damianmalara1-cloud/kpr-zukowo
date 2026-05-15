import Image from "next/image";

interface Match {
  date: string;
  time: string;
  home: string;
  away: string;
  isKpr: boolean;
  result: { home: number; away: number } | null;
}

interface Team {
  name: string;
  shortName: string;
  city: string;
  color: string;
  logo: string;
  isKpr: boolean;
}

interface TurniejStandingsProps {
  teams: Team[];
  matches: Match[];
}

interface Standing {
  team: Team;
  played: number;
  wins: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  diff: number;
  points: number;
}

function buildStandings(teams: Team[], matches: Match[]): Standing[] {
  const map = new Map<string, Standing>();
  teams.forEach((t) =>
    map.set(t.name, {
      team: t,
      played: 0,
      wins: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      diff: 0,
      points: 0,
    })
  );

  for (const m of matches) {
    if (!m.result) continue;
    const home = map.get(m.home);
    const away = map.get(m.away);
    if (!home || !away) continue;

    home.played += 1;
    away.played += 1;
    home.goalsFor += m.result.home;
    home.goalsAgainst += m.result.away;
    away.goalsFor += m.result.away;
    away.goalsAgainst += m.result.home;

    if (m.result.home >= m.result.away) {
      home.wins += 1;
      home.points += 2;
      away.losses += 1;
    } else {
      away.wins += 1;
      away.points += 2;
      home.losses += 1;
    }
  }

  return Array.from(map.values())
    .map((s) => ({ ...s, diff: s.goalsFor - s.goalsAgainst }))
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.diff !== a.diff) return b.diff - a.diff;
      return b.goalsFor - a.goalsFor;
    });
}

export default function TurniejStandings({ teams, matches }: TurniejStandingsProps) {
  const standings = buildStandings(teams, matches);
  const anyPlayed = standings.some((s) => s.played > 0);

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider">
          Tabela turnieju
        </h3>
        {!anyPlayed && (
          <span className="text-xs text-white/70 font-semibold uppercase tracking-wider">
            Aktualizacja po pierwszym meczu
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base">
          <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left px-4 py-3 w-12">#</th>
              <th className="text-left px-2 py-3">Drużyna</th>
              <th className="text-center px-2 py-3 w-12">M</th>
              <th className="text-center px-2 py-3 w-12">W</th>
              <th className="text-center px-2 py-3 w-12">P</th>
              <th className="text-center px-2 py-3 w-20">Bramki</th>
              <th className="text-center px-2 py-3 w-12">+/-</th>
              <th className="text-center px-4 py-3 w-14 bg-navy/5">Pkt</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((s, idx) => (
              <tr
                key={s.team.name}
                className={`border-t border-gray-100 transition-colors ${
                  s.team.isKpr ? "bg-red/5 font-semibold" : "hover:bg-gray-50"
                }`}
              >
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                      idx === 0 ? "bg-red text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {idx + 1}
                  </span>
                </td>
                <td className="px-2 py-3.5">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block w-1 h-8 rounded-sm flex-shrink-0"
                      style={{ backgroundColor: s.team.color }}
                      aria-hidden="true"
                    />
                    <div className="relative w-8 h-8 flex-shrink-0 bg-gray-50 rounded p-0.5 flex items-center justify-center">
                      <Image
                        src={s.team.logo}
                        alt=""
                        fill
                        sizes="32px"
                        className="object-contain p-1"
                      />
                    </div>
                    <span className={s.team.isKpr ? "text-navy" : "text-gray-800"}>
                      {s.team.shortName}
                      {s.team.isKpr && (
                        <span className="ml-2 text-[10px] bg-red text-white font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
                          Nasi
                        </span>
                      )}
                    </span>
                  </div>
                </td>
                <td className="text-center px-2 py-3.5 tabular-nums text-gray-700">
                  {s.played}
                </td>
                <td className="text-center px-2 py-3.5 tabular-nums text-gray-700">
                  {s.wins}
                </td>
                <td className="text-center px-2 py-3.5 tabular-nums text-gray-700">
                  {s.losses}
                </td>
                <td className="text-center px-2 py-3.5 tabular-nums text-gray-700">
                  {s.goalsFor}:{s.goalsAgainst}
                </td>
                <td className="text-center px-2 py-3.5 tabular-nums text-gray-700">
                  {s.diff > 0 ? `+${s.diff}` : s.diff}
                </td>
                <td className="text-center px-4 py-3.5 tabular-nums font-bold text-navy bg-navy/5">
                  {s.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 text-xs text-gray-500">
        Awans do Ligi Centralnej zdobywa zwycięzca turnieju (1. miejsce). Bez dogrywek —
        remisy rozstrzygają rzuty karne.
      </div>
    </div>
  );
}
