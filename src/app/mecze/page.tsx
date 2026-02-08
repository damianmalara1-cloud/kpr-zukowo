import Link from "next/link";
import matches from "@/data/matches.json";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "short",
  });
}

function formatFullDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const metadata = {
  title: "Mecze | KPR Fitdieta Żukowo",
  description: "Terminarz meczów KPR Fitdieta Żukowo. Sprawdź kiedy gramy!",
};

export default function MeczePage() {
  const now = new Date();

  const upcomingMatches = matches.matches
    .filter((match) => new Date(match.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastMatches = matches.matches
    .filter((match) => new Date(match.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative text-white pt-32 pb-16 bg-navy">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/mecze.jpg')", backgroundPosition: "left 25%" }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mecze</h1>
          <p className="text-xl text-gray-200">
            Terminarz sezonu {matches.season}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Nadchodzące mecze */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Nadchodzące mecze</h2>

          {upcomingMatches.length === 0 ? (
            <p className="text-gray-500">Brak zaplanowanych meczów.</p>
          ) : (
            <div className="space-y-4">
              {upcomingMatches.map((match) => (
                <Link
                  key={match.id}
                  href={`/mecze/${match.id}`}
                  className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="flex items-stretch">
                    {/* Date */}
                    <div className={`w-24 flex-shrink-0 flex flex-col items-center justify-center p-4 ${
                      match.isHome ? "bg-navy text-white" : "bg-gray-200 text-gray-700"
                    }`}>
                      <span className="text-2xl font-bold">{formatDate(match.date).split(" ")[0]}</span>
                      <span className="text-sm uppercase">{formatDate(match.date).split(" ")[1]}</span>
                    </div>

                    {/* Match info */}
                    <div className="flex-1 p-4 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            match.isHome
                              ? "bg-navy text-white"
                              : "bg-gray-200 text-gray-600"
                          }`}>
                            {match.isHome ? "DOM" : "WYJAZD"}
                          </span>
                          {match.matchSponsor && (
                            <span className="text-xs px-2 py-0.5 rounded bg-red text-white">
                              Sponsor: {match.matchSponsor}
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg">
                          KPR Fitdieta Żukowo vs {match.opponent}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {match.time} • {match.venue}
                        </p>
                      </div>
                      <div className="text-navy">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Rozegrane mecze */}
        {pastMatches.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-navy mb-6">Rozegrane mecze</h2>
            <div className="space-y-4">
              {pastMatches.map((match) => (
                <Link
                  key={match.id}
                  href={`/mecze/${match.id}`}
                  className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden opacity-75 hover:opacity-100"
                >
                  <div className="flex items-stretch">
                    {/* Date */}
                    <div className="w-24 flex-shrink-0 flex flex-col items-center justify-center p-4 bg-gray-100 text-gray-500">
                      <span className="text-2xl font-bold">{formatDate(match.date).split(" ")[0]}</span>
                      <span className="text-sm uppercase">{formatDate(match.date).split(" ")[1]}</span>
                    </div>

                    {/* Match info */}
                    <div className="flex-1 p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-700">
                          KPR Fitdieta Żukowo vs {match.opponent}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {match.venue}
                        </p>
                      </div>
                      {match.score && (
                        <div className="text-2xl font-bold text-navy">
                          {match.score}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
