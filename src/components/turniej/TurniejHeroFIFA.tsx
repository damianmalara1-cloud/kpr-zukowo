import HeroParallaxContent from "./HeroParallaxContent";
import ShareButtons from "./ShareButtons";

interface TurniejHeroFIFAProps {
  shareUrl: string;
  shareTitle: string;
  shareText: string;
  broadcastUrl: string;
}

export default function TurniejHeroFIFA({
  shareUrl,
  shareTitle,
  shareText,
  broadcastUrl,
}: TurniejHeroFIFAProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* GIGANTIC TŁO: "22 24" jako gigantyczne cyfry */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="font-display text-mega text-white/[0.06] whitespace-nowrap leading-none tracking-tighter">
          22<span className="text-red/30 mx-2 md:mx-4">·</span>24
        </div>
      </div>

      {/* Subtle red glow z prawej */}
      <div
        className="absolute -right-32 top-1/4 w-[40rem] h-[40rem] bg-red/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 bottom-0 w-[30rem] h-[30rem] bg-navy/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <HeroParallaxContent className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
          <span className="h-px w-12 md:w-20 bg-red" aria-hidden="true" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-red">
            ZPRP · 22-24 maja 2026 · Hala SMS Kielce
          </span>
        </div>

        {/* H1 — gigantic display */}
        <h1 className="font-display leading-[0.85] mb-8 animate-fade-in-up animate-delay-100">
          <span className="block text-huge text-white">Turniej</span>
          <span className="block text-huge text-red">Mistrzów</span>
        </h1>

        {/* Subline */}
        <p className="text-xl md:text-3xl text-white/85 mb-2 max-w-3xl font-light leading-snug animate-fade-in-up animate-delay-200">
          KPR Fit Dieta Żukowo gra o awans do{" "}
          <span className="font-display text-white">Ligi Centralnej</span>.
        </p>
        <p className="text-base md:text-xl text-white/55 max-w-2xl mb-12 animate-fade-in-up animate-delay-200">
          Cztery najlepsze kluby 1. Ligi. Trzy dni. Sześć meczów. Jeden awans.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12 animate-fade-in-up animate-delay-300">
          {broadcastUrl ? (
            <a
              href={broadcastUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red hover:bg-red-dark text-white font-bold py-4 px-9 text-base md:text-lg uppercase tracking-wider transition-[transform,background-color] hover:scale-105 animate-glow-pulse"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Oglądaj online
            </a>
          ) : (
            <span className="inline-flex items-center gap-3 bg-white/5 border-2 border-white/20 text-white/70 font-bold py-4 px-9 text-base md:text-lg uppercase tracking-wider">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Transmisja: wkrótce
            </span>
          )}
        </div>

        {/* Share buttons */}
        <div className="animate-fade-in-up animate-delay-400">
          <ShareButtons url={shareUrl} title={shareTitle} text={shareText} variant="hero" />
        </div>
      </HeroParallaxContent>

      {/* Bottom marquee — przewijające się hasło */}
      <div className="absolute bottom-0 left-0 right-0 bg-red overflow-hidden py-4 md:py-6 z-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-xl md:text-3xl uppercase tracking-tight text-white px-6 inline-flex items-center gap-6"
            >
              Awans do Ligi Centralnej
              <span className="text-white/60 text-base" aria-hidden="true">★</span>
              Kielce 22-24.05
              <span className="text-white/60 text-base" aria-hidden="true">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
