import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Grupa-7.jpg"
          alt="KPR Fit Dieta Żukowo — drużyna piłki ręcznej"
          fill
          className="object-cover object-top"
          priority
          quality={85}
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
          Tu zaczyna się <span className="text-red">historia</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          KPR Fit Dieta Żukowo – piłka ręczna, emocje i społeczność
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link
            href="/mecze"
            className="bg-red hover:bg-red-dark text-white font-semibold py-4 px-10 rounded-lg transition-colors text-lg hover:scale-[1.02] transition-transform shadow-lg"
          >
            Zobacz najbliższy mecz
          </Link>
          <Link
            href="/o-klubie"
            className="text-white/90 hover:text-white font-medium transition-colors text-lg inline-flex items-center gap-2 group"
          >
            Poznaj klub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Social proof bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">24+</span>
            <span>Partnerów</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">2M+</span>
            <span>Wyświetleń</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">100%</span>
            <span>Darmowe wejście</span>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
