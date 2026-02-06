import Link from "next/link";
import Image from "next/image";
import matches from "@/data/matches.json";
import fs from "fs";
import path from "path";
import HeroSlider from "@/components/HeroSlider";
import MatchCountdown from "@/components/MatchCountdown";
import LeagueTable from "@/components/LeagueTable";
import { CalendarIcon, ClockIcon, LocationIcon, TicketIcon } from "@/components/Icons";

// Znajdź najbliższy mecz
function getNextMatch() {
  const now = new Date();
  const upcomingMatches = matches.matches
    .filter((match) => new Date(match.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return upcomingMatches[0] || null;
}

// Znajdź logo przeciwnika
function getOpponentLogo(opponentName: string): string | null {
  const opponentsDir = path.join(process.cwd(), "public", "images", "opponents");

  // Sprawdź czy folder istnieje
  if (!fs.existsSync(opponentsDir)) {
    return null;
  }

  // Szukaj pliku z nazwą przeciwnika (różne rozszerzenia)
  const extensions = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
  const files = fs.readdirSync(opponentsDir);

  for (const file of files) {
    const fileName = path.parse(file).name.toLowerCase();
    const opponentLower = opponentName.toLowerCase();

    // Sprawdź czy nazwa pliku zawiera nazwę przeciwnika lub odwrotnie
    if (fileName.includes(opponentLower) || opponentLower.includes(fileName)) {
      return `/images/opponents/${file}`;
    }
  }

  return null;
}

async function fetchLeagueTable() {
  try {
    const res = await fetch(
      "https://rozgrywki.zprp.pl/?Sezon=194&Rozgrywki=11601&Tabela=6",
      { next: { revalidate: 3600 } }
    );
    const html = await res.text();

    const teams: {
      position: number;
      name: string;
      played: number;
      wins: number;
      draws: number;
      losses: number;
      goalsFor: number;
      goalsAgainst: number;
      points: number;
    }[] = [];

    // Parse HTML table rows - rows have class "even" or "odd"
    const rowRegex = /<tr\s+class="(?:even|odd)"[^>]*>([\s\S]*?)<\/tr>/gi;
    let rowMatch;
    while ((rowMatch = rowRegex.exec(html)) !== null) {
      const row = rowMatch[1];
      const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;
      const cells: string[] = [];
      let cellMatch;
      while ((cellMatch = cellRegex.exec(row)) !== null) {
        cells.push(cellMatch[1].replace(/<[^>]*>/g, "").trim());
      }
      // cells: [0]=pos, [1]=name, [2]=logo(empty), [3]=played, [4]=wins, [5]=losses,
      //         [6]=drawsWon, [7]=drawsLost, [8]=goalsFor, [9]=goalsAgainst,
      //         [10]=diff, [11]=points, [12]=penaltyPts, ...
      if (cells.length >= 12) {
        const draws = (parseInt(cells[6]) || 0) + (parseInt(cells[7]) || 0);
        teams.push({
          position: parseInt(cells[0]) || teams.length + 1,
          name: cells[1],
          played: parseInt(cells[3]) || 0,
          wins: parseInt(cells[4]) || 0,
          draws,
          losses: parseInt(cells[5]) || 0,
          goalsFor: parseInt(cells[8]) || 0,
          goalsAgainst: parseInt(cells[9]) || 0,
          points: parseInt(cells[11]) || 0,
        });
      }
    }

    return teams;
  } catch {
    return [];
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function Home() {
  const nextMatch = getNextMatch();
  const leagueTable = await fetchLeagueTable();
  const opponentLogo = nextMatch ? getOpponentLogo(nextMatch.opponent) : null;

  return (
    <div>
      {/* HERO SECTION */}
      <HeroSlider />

      {/* NAJBLIŻSZY MECZ */}
      {nextMatch && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">
              Najbliższy mecz
            </h2>
            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-navy text-white p-4 text-center">
                <span className="text-sm uppercase tracking-wide">
                  {nextMatch.isHome ? "Mecz domowy" : "Mecz wyjazdowy"}
                </span>
              </div>
              <div className="p-8">
                {/* Countdown */}
                <div className="mb-8">
                  <p className="text-center text-gray-600 mb-4 text-sm uppercase tracking-wider font-medium">
                    Do meczu pozostało
                  </p>
                  <MatchCountdown matchDate={nextMatch.date} matchTime={nextMatch.time} />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  {/* KPR */}
                  <div className="text-center group">
                    <div className="w-24 h-24 md:w-28 md:h-28 relative mb-3 mx-auto group-hover:scale-105 transition-transform">
                      <Image
                        src="/images/logo/kpr_zukowo_beztla.png"
                        alt="KPR Żukowo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-semibold text-navy">KPR Fitdieta Żukowo</p>
                  </div>

                  {/* VS */}
                  <div className="text-5xl font-bold text-red">vs</div>

                  {/* Opponent */}
                  <div className="text-center group">
                    <div className="w-24 h-24 md:w-28 md:h-28 relative mb-3 mx-auto group-hover:scale-105 transition-transform">
                      {opponentLogo ? (
                        <Image
                          src={opponentLogo}
                          alt={nextMatch.opponent}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-gray-500 font-bold text-sm">LOGO</span>
                        </div>
                      )}
                    </div>
                    <p className="font-semibold text-gray-700">{nextMatch.opponent}</p>
                  </div>
                </div>

                {/* Match details */}
                <div className="mt-8 text-center space-y-3 text-gray-600">
                  <p className="flex items-center justify-center gap-3">
                    <CalendarIcon className="w-5 h-5 text-navy" />
                    <span>{formatDate(nextMatch.date)}</span>
                  </p>
                  <p className="flex items-center justify-center gap-3">
                    <ClockIcon className="w-5 h-5 text-navy" />
                    <span>{nextMatch.time}</span>
                  </p>
                  <p className="flex items-center justify-center gap-3">
                    <LocationIcon className="w-5 h-5 text-navy" />
                    <span>{nextMatch.venue}</span>
                  </p>
                  <p className="flex items-center justify-center gap-3 text-green-600 font-semibold mt-4">
                    <TicketIcon className="w-5 h-5" />
                    <span>Wstęp wolny</span>
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href={`/mecze/${nextMatch.id}`}
                    className="inline-block bg-red hover:bg-red-dark text-white font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105 hover:shadow-lg"
                  >
                    Szczegóły meczu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* TABELA LIGOWA */}
      <LeagueTable teams={leagueTable} />

      {/* FILOZOFIA KLUBU */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Nasza filozofia</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            „Budujemy klub, który łączy sportową rywalizację z lokalną społecznością.
            <br />
            <span className="font-semibold text-navy">
              Darmowe wejście, pełna hala i prawdziwe emocje.
            </span>
          </p>
          <Link
            href="/o-klubie"
            className="text-red hover:text-red-dark font-semibold transition-colors inline-flex items-center gap-2 group"
          >
            Dowiedz się więcej o klubie
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* KIBICE & SPOŁECZNOŚĆ - PROMO */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Kibice & Społeczność</h2>
          <p className="text-xl text-gray-200 mb-4">
            Tu zaczyna się historia
          </p>
          <p className="text-gray-300 mb-8">
            Dzieci, rodziny, lokalność – to fundament KPR Żukowo.
            Każdy mecz to święto dla całej społeczności.
          </p>
          <Link
            href="/kibice"
            className="inline-block bg-white hover:bg-gray-100 text-navy font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105"
          >
            Dołącz do społeczności
          </Link>
        </div>
      </section>
    </div>
  );
}
