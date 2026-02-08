import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matches from "@/data/matches.json";

interface PageProps {
  params: Promise<{ id: string }>;
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

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const match = matches.matches.find((m) => m.id === id);

  if (!match) {
    return { title: "Mecz nie znaleziony | KPR Fitdieta Żukowo" };
  }

  return {
    title: `KPR Fitdieta Żukowo vs ${match.opponent} | Mecze`,
    description: match.description,
  };
}

function getOpponentLogo(opponentName: string): string | null {
  const opponentsDir = path.join(process.cwd(), "public", "images", "opponents");
  if (!fs.existsSync(opponentsDir)) return null;
  const extensions = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
  const files = fs.readdirSync(opponentsDir);
  for (const file of files) {
    const fileName = path.parse(file).name.toLowerCase();
    const opponentLower = opponentName.toLowerCase();
    if (fileName.includes(opponentLower) || opponentLower.includes(fileName)) {
      return `/images/opponents/${file}`;
    }
  }
  return null;
}

export async function generateStaticParams() {
  return matches.matches.map((match) => ({
    id: match.id,
  }));
}

export default async function MatchPage({ params }: PageProps) {
  const { id } = await params;
  const match = matches.matches.find((m) => m.id === id);

  if (!match) {
    notFound();
  }

  const isPast = new Date(match.date) < new Date();
  const opponentLogo = getOpponentLogo(match.opponent);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`${match.isHome ? "bg-navy" : "bg-gray-700"} text-white py-12`}>
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/mecze"
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Wróć do terminarza
          </Link>

          <div className="text-center">
            <span className={`inline-block px-3 py-1 rounded text-sm mb-4 ${
              match.isHome ? "bg-red" : "bg-gray-600"
            }`}>
              {match.isHome ? "Mecz domowy" : "Mecz wyjazdowy"}
            </span>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {/* Gospodarz */}
              <div className="text-center">
                <div className="w-20 h-20 relative mb-2 mx-auto">
                  {match.isHome ? (
                    <Image src="/images/logo/kpr_zukowo_beztla.png" alt="KPR Żukowo" fill className="object-contain" />
                  ) : opponentLogo ? (
                    <Image src={opponentLogo} alt={match.opponent} fill className="object-contain" />
                  ) : (
                    <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white/50 text-xs">LOGO</span>
                    </div>
                  )}
                </div>
                <p className="font-semibold">{match.isHome ? "KPR Fitdieta Żukowo" : match.opponent}</p>
              </div>

              {/* Score or VS */}
              <div className="text-center">
                {match.score ? (
                  <div className="text-5xl font-bold">{match.score}</div>
                ) : (
                  <div className="text-3xl font-light text-gray-300">vs</div>
                )}
              </div>

              {/* Gość */}
              <div className="text-center">
                <div className="w-20 h-20 relative mb-2 mx-auto">
                  {match.isHome ? (
                    opponentLogo ? (
                      <Image src={opponentLogo} alt={match.opponent} fill className="object-contain" />
                    ) : (
                      <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-white/50 text-xs">LOGO</span>
                      </div>
                    )
                  ) : (
                    <Image src="/images/logo/kpr_zukowo_beztla.png" alt="KPR Żukowo" fill className="object-contain" />
                  )}
                </div>
                <p className="font-semibold">{match.isHome ? match.opponent : "KPR Fitdieta Żukowo"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Informacje o meczu */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-navy mb-4">Informacje</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-semibold">{formatDate(match.date)}</p>
                  <p className="text-gray-500">Godzina: {match.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold">{match.venue}</p>
                  {match.isHome && (
                    <a
                      href="https://maps.app.goo.gl/XM1XMa5zmbcCc6tq5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red hover:text-red-dark transition-colors underline text-sm"
                    >
                      Zobacz na mapie
                    </a>
                  )}
                </div>
              </div>
              {!isPast && match.isHome && (
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎟️</span>
                  <div>
                    <p className="font-semibold text-green-600">Wstęp wolny</p>
                    <p className="text-gray-500">Zapraszamy wszystkich!</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Zapowiedź / Relacja */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-navy mb-4">
              {isPast ? "Relacja" : "Zapowiedź"}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {match.description}
            </p>
          </div>
        </div>

        {/* Sponsor meczu */}
        {match.matchSponsor && (
          <div className="mt-8 bg-gradient-to-r from-navy to-navy-light rounded-xl p-6 text-white text-center">
            <p className="text-sm uppercase tracking-wide text-gray-300 mb-2">
              Sponsor meczu
            </p>
            <p className="text-2xl font-bold">{match.matchSponsor}</p>
          </div>
        )}

        {/* Galeria (placeholder) */}
        {isPast && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-navy mb-4">Galeria zdjęć</h2>
            <div className="bg-white rounded-xl shadow-md p-8 text-center text-gray-400">
              <p>Galeria zdjęć z meczu będzie dostępna wkrótce.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
