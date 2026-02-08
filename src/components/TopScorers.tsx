import Link from "next/link";
import { TrophyIcon } from "@/components/Icons";

interface ScorerRow {
  position: number;
  name: string;
  club: string;
  matches: number;
  goals: number;
}

interface TopScorersProps {
  scorers: ScorerRow[];
}

export default function TopScorers({ scorers }: TopScorersProps) {
  if (!scorers || scorers.length === 0) return null;

  const top10 = scorers.slice(0, 5);
  const isKpr = (club: string) =>
    club.toLowerCase().includes("żukowo") || club.toLowerCase().includes("zukow");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy text-center mb-2">
          Klasyfikacja strzelców
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          I Liga Mężczyzn — Sezon 2025/2026
        </p>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-navy text-white text-left">
                <th className="py-2.5 px-2 sm:px-4 text-center w-9 sm:w-12">#</th>
                <th className="py-2.5 px-2 sm:px-4">Zawodnik</th>
                <th className="py-2.5 px-2 sm:px-4 hidden sm:table-cell">Drużyna</th>
                <th className="py-2.5 px-1.5 sm:px-4 text-center hidden md:table-cell">Mecze</th>
                <th className="py-2.5 px-2 sm:px-4 text-center font-bold">Bramki</th>
              </tr>
            </thead>
            <tbody>
              {top10.map((scorer) => {
                const isLeader = scorer.position === 1;
                const isClub = isKpr(scorer.club);

                return (
                  <tr
                    key={scorer.position}
                    className={`border-b last:border-b-0 transition-colors ${
                      isLeader
                        ? "bg-amber-50 font-semibold"
                        : isClub
                          ? "bg-blue-50 font-semibold"
                          : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <td className="py-2.5 px-2 sm:px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full text-xs font-bold ${
                          isLeader
                            ? "bg-amber-400 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {isLeader ? (
                          <TrophyIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        ) : (
                          scorer.position
                        )}
                      </span>
                    </td>
                    <td className={`py-2.5 px-2 sm:px-4 max-w-[120px] sm:max-w-none truncate ${isClub ? "text-navy" : "text-gray-800"}`}>
                      {scorer.name}
                      <span className="block sm:hidden text-[10px] text-gray-400 truncate">
                        {scorer.club}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 sm:px-4 text-gray-600 hidden sm:table-cell max-w-[160px] truncate">
                      {scorer.club}
                    </td>
                    <td className="py-2.5 px-1.5 sm:px-4 text-center text-gray-500 hidden md:table-cell">
                      {scorer.matches}
                    </td>
                    <td className="py-2.5 px-2 sm:px-4 text-center">
                      <span
                        className={`inline-block min-w-[1.75rem] sm:min-w-[2rem] py-0.5 rounded font-bold ${
                          isLeader
                            ? "bg-amber-400 text-white"
                            : isClub
                              ? "bg-navy text-white"
                              : "text-gray-800"
                        }`}
                      >
                        {scorer.goals}
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
            href="https://rozgrywki.zprp.pl/?Sezon=194&Rozgrywki=11601&Tabela3=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red hover:text-red-dark font-semibold transition-colors inline-flex items-center gap-2 group text-sm"
          >
            Zobacz pełną klasyfikację na zprp.pl
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
