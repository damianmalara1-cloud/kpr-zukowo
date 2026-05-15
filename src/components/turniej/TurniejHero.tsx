import Image from "next/image";
import ShareButtons from "./ShareButtons";
import FloatingOrbs from "./FloatingOrbs";
import HeroParallaxContent from "./HeroParallaxContent";

interface TurniejHeroProps {
  shareUrl: string;
  shareTitle: string;
  shareText: string;
  broadcastUrl: string;
}

export default function TurniejHero({
  shareUrl,
  shareTitle,
  shareText,
  broadcastUrl,
}: TurniejHeroProps) {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-br from-navy-dark via-black to-navy animate-gradient-shift text-white">
      {/* Tło — zdjęcie drużyny z mocnym overlay */}
      <Image
        src="/images/Grupa-7.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-25 mix-blend-luminosity"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-black/85 to-black/95"
        aria-hidden="true"
      />

      {/* Floating orbs — parallax (rusza się wolniej niż content) */}
      <FloatingOrbs variant="dark" parallax />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <HeroParallaxContent className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
          <span className="h-px w-12 bg-red animate-pulse-subtle" aria-hidden="true" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-red">
            ZPRP · Turniej Mistrzów · Sezon 2025/26
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 max-w-5xl animate-fade-in-up animate-delay-100">
          Awans do{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-red">Ligi Centralnej</span>
            <span
              className="absolute inset-x-0 bottom-1 h-3 bg-red/20 -z-0 animate-shimmer"
              aria-hidden="true"
            />
          </span>{" "}
          na linii.
        </h1>

        {/* Subline */}
        <p className="text-xl md:text-2xl text-white/85 mb-3 font-light animate-fade-in-up animate-delay-200">
          22-24 maja 2026 · Hala SMS, Kielce
        </p>
        <p className="text-base md:text-lg text-white/65 mb-10 max-w-2xl animate-fade-in-up animate-delay-200">
          KPR Fit Dieta Żukowo gra w stawce czterech najlepszych klubów 1. Ligi. Każdy z każdym.
          Trzy dni rozstrzygną pracę 11 miesięcy.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10 animate-fade-in-up animate-delay-300">
          {broadcastUrl ? (
            <a
              href={broadcastUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-semibold py-3.5 px-8 rounded-lg shadow-lg shadow-red/30 transition-[transform,background-color,box-shadow] hover:scale-105 text-base animate-glow-pulse"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Oglądaj online
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white/70 font-semibold py-3.5 px-8 rounded-lg text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Transmisja online: wkrótce informacja
            </span>
          )}
        </div>

        {/* Share */}
        <div className="animate-fade-in-up animate-delay-400">
          <ShareButtons url={shareUrl} title={shareTitle} text={shareText} variant="hero" />
        </div>

        {/* Quick stats */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-2xl animate-fade-in-up animate-delay-500">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">4</div>
            <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">
              Drużyny
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">6</div>
            <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">
              Mecze
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-red">1</div>
            <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">
              Awans
            </div>
          </div>
        </div>
      </HeroParallaxContent>
    </section>
  );
}
