import Link from "next/link";
import type { Metadata } from "next";
import VotingModal from "@/components/VotingModal";
import TurniejHeroFIFA from "@/components/turniej/TurniejHeroFIFA";
import RivalCard from "@/components/turniej/RivalCard";
import MatchSchedule from "@/components/turniej/MatchSchedule";
import TurniejStandings from "@/components/turniej/TurniejStandings";
import ShareButtons from "@/components/turniej/ShareButtons";
import MegaShareGrid from "@/components/turniej/MegaShareGrid";
import BannerStripe from "@/components/turniej/BannerStripe";
import BigCountdownBanner from "@/components/turniej/BigCountdownBanner";
import PixelSeparator from "@/components/turniej/PixelSeparator";
import ManifestoBlock from "@/components/turniej/ManifestoBlock";
import SignatureMarquee from "@/components/turniej/SignatureMarquee";
import Card3DTilt from "@/components/turniej/Card3DTilt";
import data from "@/data/turniej-mistrzow.json";

// Po niedzieli 24.05 podmień: 'pending' → 'awans' lub 'brak'
const TOURNAMENT_RESULT: "pending" | "awans" | "brak" = "pending";

const PAGE_URL = "https://kprzukowo.pl/";
const SHARE_TITLE = "Turniej Mistrzów ZPRP — Kielce 22-24.05.2026";
const SHARE_TEXT =
  "KPR Fit Dieta Żukowo gra o awans do Ligi Centralnej. Trzy dni, sześć meczów, jeden awans. Trzymaj kciuki — szczegóły:";

export const metadata: Metadata = {
  title: "Turniej Mistrzów Kielce 22-24.05.2026 | KPR Fit Dieta Żukowo",
  description:
    "KPR Fit Dieta Żukowo gra o awans do Ligi Centralnej. Tabela, harmonogram, rywale. 22-24 maja 2026, Hala SMS, Kielce.",
  alternates: { canonical: "https://kprzukowo.pl/" },
  openGraph: {
    title: "Turniej Mistrzów ZPRP — Kielce 22-24.05.2026",
    description:
      "KPR Fit Dieta Żukowo, PURINA Kąty Wrocławskie, KSSPR Końskie i Olimpia MEDEX Piekary Śląskie zagrają w Kielcach o jedyny awans do Ligi Centralnej.",
    url: PAGE_URL,
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Turniej Mistrzów ZPRP — Kielce 22-24 maja 2026 — KPR Fit Dieta Żukowo",
      },
    ],
  },
};

type Match = (typeof data.matches)[number];

function ResultHero({ variant }: { variant: "awans" | "brak" }) {
  const isAwans = variant === "awans";
  return (
    <section
      className={`relative text-white py-32 md:py-44 text-center overflow-hidden ${
        isAwans
          ? "bg-gradient-to-br from-red via-red-dark to-black animate-gradient-shift"
          : "bg-gradient-to-br from-navy-dark via-navy to-black"
      }`}
    >
      <div className="relative max-w-5xl mx-auto px-4">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-white/80 mb-6">
          24 maja 2026
        </p>
        <h1 className="font-display text-huge mb-6">
          {isAwans ? "Awans do Ligi Centralnej" : "Trzy dni walki."}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">
          {isAwans
            ? "KPR Fit Dieta Żukowo dowiózł. Charakter ponad budżet."
            : "KPR Fit Dieta Żukowo · Liga Centralna w sezonie 2027/28. Wracamy mocniejsi."}
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <VotingModal />

      {/* === SEKCJA 1: HERO FIFA-style (gigantic 22·24 background) === */}
      {TOURNAMENT_RESULT === "pending" ? (
        <TurniejHeroFIFA
          shareUrl={PAGE_URL}
          shareTitle={SHARE_TITLE}
          shareText={SHARE_TEXT}
          broadcastUrl={data.broadcast.url}
        />
      ) : (
        <ResultHero variant={TOURNAMENT_RESULT} />
      )}

      {/* === SEKCJA 2: PIXEL SEPARATOR red === */}
      <PixelSeparator color="#dc2626" rows={3} />

      {/* === SEKCJA 3: STAWKA — solid red banner === */}
      <BannerStripe variant="red" size="xl">
        <div className="text-center scroll-fade-up">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-8 text-white/80">
            Stawka turnieju
          </p>
          <h2 className="font-display text-huge mb-8">
            Awans do <br />
            Ligi Centralnej
          </h2>
          <p className="text-base md:text-xl max-w-2xl mx-auto text-white/90">
            Drugi najwyższy poziom rozgrywek piłki ręcznej w Polsce. Każdy z każdym, bez
            dogrywek — remisy rozstrzygają rzuty karne.
          </p>
        </div>
      </BannerStripe>

      {/* === SEKCJA 4: MANIFESTO === */}
      <ManifestoBlock
        eyebrow="Hala SMS Kielce · 22-24 maja 2026"
        headline="Trzy dni rozstrzygną pracę 11 miesięcy"
        body="KPR Fit Dieta Żukowo wjeżdża do Kielc w stawce czterech najlepszych klubów 1. Ligi. Jeden awans. Każdy mecz musi mieć zwycięzcę. Każdy głos z trybun jest przewagą."
      />

      {/* === SEKCJA 5: PIXEL SEPARATOR navy === */}
      <PixelSeparator color="#1e3a5f" rows={3} />

      {/* === SEKCJA 6: BIG COUNTDOWN — full-width red banner === */}
      <BigCountdownBanner
        targetDate={data.firstKprMatch.date}
        targetTime={data.firstKprMatch.time}
        label="Do pierwszego meczu KPR Fit Dieta Żukowo"
      />

      {/* === SEKCJA 7: DRUŻYNY === */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-red mb-4 scroll-fade-up">
              Cztery drużyny
            </p>
            <h2 className="font-display text-huge text-navy scroll-3d-up">
              Kto zagra w Kielcach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {data.teams.map((team, idx) => {
              const slideClass = idx % 2 === 0 ? "scroll-3d-left" : "scroll-3d-right";
              return (
                <div key={team.name} className={slideClass}>
                  <Card3DTilt>
                    <RivalCard
                      name={team.name}
                      shortName={team.shortName}
                      city={team.city}
                      color={team.color}
                      logo={team.logo}
                      isKpr={team.isKpr}
                    />
                  </Card3DTilt>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SEKCJA 8: PIXEL SEPARATOR red === */}
      <PixelSeparator color="#dc2626" rows={3} />

      {/* === SEKCJA 9: TABELA TURNIEJU === */}
      <section className="bg-gradient-to-br from-gray-100 via-white to-gray-100 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-red mb-4 scroll-fade-up">
              Klasyfikacja
            </p>
            <h2 className="font-display text-huge text-navy scroll-3d-up">
              Tabela turnieju
            </h2>
          </div>

          <div className="scroll-3d-up">
            <TurniejStandings teams={data.teams} matches={data.matches as Match[]} />
          </div>
        </div>
      </section>

      {/* === SEKCJA 10: HARMONOGRAM (ciemne tło) === */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-red mb-4 scroll-fade-up">
              Harmonogram meczów
            </p>
            <h2 className="font-display text-huge text-white scroll-3d-up">
              Trzy dni · Sześć meczów
            </h2>
          </div>

          <div className="scroll-3d-up">
            <MatchSchedule matches={data.matches as Match[]} />
          </div>
        </div>
      </section>

      {/* === SEKCJA 11: PIXEL SEPARATOR red === */}
      <PixelSeparator color="#dc2626" rows={3} />

      {/* === SEKCJA 13: MEGA SHARE — niech cała Polska usłyszy === */}
      <BannerStripe variant="navy" size="xl">
        <div className="text-center mb-12 scroll-fade-up">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-red mb-4">
            Twój ruch
          </p>
          <h2 className="font-display text-huge mb-6">
            Niech cała Polska <br />
            <span className="text-red">usłyszy.</span>
          </h2>
          <p className="text-base md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Trzy dni dzielą KPR Fit Dieta Żukowo od Ligi Centralnej. Każdy udostępniony post to
            głos dopingu z Twojego telefonu — wrzuć w Stories, oznacz znajomych, podaj dalej.
            Pomóż nakręcić temat na całe Pomorze i niech rywale poczują, jak głośna jest nasza
            strona.
          </p>
        </div>

        <div className="scroll-3d-up">
          <MegaShareGrid
            url={PAGE_URL}
            shareText={SHARE_TEXT}
            facebookProfile="https://www.facebook.com/kprzukowo"
            instagramProfile="https://www.instagram.com/kpr_zukowo/"
          />
        </div>

        <p className="text-center text-white/55 text-sm md:text-base mt-10 scroll-fade-up">
          Albo oznacz nas: <span className="text-white font-bold">@kprzukowo</span> na Facebooku ·{" "}
          <span className="text-white font-bold">@kpr_zukowo</span> na Instagramie
        </p>
      </BannerStripe>

      {/* === SEKCJA 14: CTA do SEZONU ZASADNICZEGO === */}
      <section className="bg-white py-24 md:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-gray-500 mb-4 scroll-fade-up">
            Sezon 2025/26 · 1. Liga
          </p>
          <h2 className="font-display text-huge text-navy mb-6 scroll-3d-up">
            Tabela ligi i terminarz
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto scroll-fade-up">
            Cała statystyka sezonu zasadniczego, najbliższe mecze i normalne życie KPR Fit
            Dieta Żukowo — tu.
          </p>

          <div className="scroll-zoom-in inline-block">
            <Link
              href="/sezon-zasadniczy"
              className="group inline-flex items-center gap-3 bg-navy hover:bg-navy-dark text-white font-bold text-base md:text-lg py-5 px-10 md:px-14 uppercase tracking-wider transition-[transform,background-color] hover:scale-105 animate-glow-pulse"
            >
              Przejdź do sezonu zasadniczego
              <span
                className="text-2xl group-hover:translate-x-2 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* === SEKCJA 15: SIGNATURE MARQUEE === */}
      <SignatureMarquee text="Gramy dla Żukowa" variant="outline" bgClass="bg-black" />
    </div>
  );
}
