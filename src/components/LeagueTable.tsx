import Link from "next/link";
import { TrophyIcon } from "@/components/Icons";

interface TeamRow {
  position: number;
  name: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

interface LeagueTableProps {
  teams: TeamRow[];
}

export default function LeagueTable({ teams }: LeagueTableProps) {
  if (!teams || teams.length === 0) return null;

  const top5 = teams.slice(0, 5);
  const isKpr = (name: string) =>
    name.toLowerCase().includes("żukowo") || name.toLowerCase().includes("zukow");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy text-center mb-2">
          Tabela ligowa
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          I Liga Mężczyzn — Sezon 2025/2026
        </p>

        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy text-white text-left">
                <th className="py-3 px-4 text-center w-12">#</th>
                <th className="py-3 px-4">Drużyna</th>
                <th className="py-3 px-4 text-center">M</th>
                <th className="py-3 px-4 text-center">Z</th>
                <th className="py-3 px-4 text-center">R</th>
                <th className="py-3 px-4 text-center">P</th>
                <th className="py-3 px-4 text-center hidden sm:table-cell">Bramki</th>
                <th className="py-3 px-4 text-center font-bold">Pkt</th>
              </tr>
            </thead>
            <tbody>
              {top5.map((team) => {
                const isLeader = team.position === 1;
                const isClub = isKpr(team.name);

                return (
                  <tr
                    key={team.position}
                    className={`border-b last:border-b-0 transition-colors ${
                      isLeader
                        ? "bg-amber-50 font-semibold"
                        : isClub
                          ? "bg-blue-50 font-semibold"
                          : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          isLeader
                            ? "bg-amber-400 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {isLeader ? (
                          <TrophyIcon className="w-4 h-4" />
                        ) : (
                          team.position
                        )}
                      </span>
                    </td>
                    <td className={`py-3 px-4 ${isClub ? "text-navy" : "text-gray-800"}`}>
                      {team.name}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">{team.played}</td>
                    <td className="py-3 px-4 text-center text-green-600">{team.wins}</td>
                    <td className="py-3 px-4 text-center text-gray-500">{team.draws}</td>
                    <td className="py-3 px-4 text-center text-red">{team.losses}</td>
                    <td className="py-3 px-4 text-center text-gray-500 hidden sm:table-cell">
                      {team.goalsFor}:{team.goalsAgainst}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block min-w-[2rem] py-0.5 rounded font-bold ${
                          isLeader
                            ? "bg-amber-400 text-white"
                            : isClub
                              ? "bg-navy text-white"
                              : "text-gray-800"
                        }`}
                      >
                        {team.points}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center">
          <Link
            href="https://rozgrywki.zprp.pl/?Sezon=194&Rozgrywki=11601&Tabela=6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red hover:text-red-dark font-semibold transition-colors inline-flex items-center gap-2 group text-sm"
          >
            Zobacz pełną tabelę na zprp.pl
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
