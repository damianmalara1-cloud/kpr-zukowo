import Link from "next/link";

const VOTING_END = new Date("2026-05-07T23:59:59+02:00");

export default function VotingBanner() {
  if (new Date() > VOTING_END) return null;

  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <div className="h-1.5 bg-gradient-to-r from-navy via-navy to-red" />
          <div className="relative bg-navy text-white px-7 py-10 text-center overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,.08) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative max-w-2xl mx-auto">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">
                Sezon 2026 · głosowanie
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl font-bold uppercase leading-tight">
                Wybierz koszulkę, w której zagramy
              </h2>
              <p className="mb-7 text-base md:text-lg text-white/85 leading-relaxed">
                25 projektów wykonanych przez dzieci z&nbsp;Żukowa. Zwycięska koszulka będzie
                główną inspiracją na przyszły sezon, a&nbsp;jej autor otrzyma koszulkę meczową
                na sezon 2026/2027. Głosowanie trwa do <strong>7 maja</strong>.
              </p>
              <Link
                href="https://glosowanie.kprzukowo.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red hover:bg-red-dark text-white font-bold text-sm uppercase tracking-[0.15em] px-9 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Zagłosuj na projekt →
              </Link>
              <p className="mt-5 text-xs text-white/60">
                Nagroda dla autora zwycięskiego projektu: koszulka meczowa na sezon 2026/2027.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
