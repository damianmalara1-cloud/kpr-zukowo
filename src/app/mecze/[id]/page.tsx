import Link from "next/link";
import { notFound } from "next/navigation";
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
              {/* KPR */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">KPR</span>
                </div>
                <p className="font-semibold">KPR Fitdieta Żukowo</p>
              </div>

              {/* Score or VS */}
              <div className="text-center">
                {match.score ? (
                  <div className="text-5xl font-bold">{match.score}</div>
                ) : (
                  <div className="text-3xl font-light text-gray-300">vs</div>
                )}
              </div>

              {/* Opponent */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white/50 text-xs">LOGO</span>
                </div>
                <p className="font-semibold">{match.opponent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
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
                    <p className="text-gray-500">ul. Sportowa, 83-330 Żukowo</p>
                  )}
                </div>
              </div>
              {!isPast && (
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
