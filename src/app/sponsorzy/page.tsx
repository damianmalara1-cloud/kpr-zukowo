import Link from "next/link";
import { EyeIcon, ShareIcon, FlameIcon, TargetIcon } from "@/components/Icons";

export const metadata = {
  title: "Sponsorzy | KPR Fit Dieta Żukowo",
  description: "Oferta sponsorska KPR Fit Dieta Żukowo. Widoczność, zasięgi, emocje i aktywacje marketingowe.",
};

const sponsorPackages = [
  {
    name: "Sponsor Meczu",
    description: "Widoczność podczas jednego meczu domowego",
    features: [
      "Logo na materiałach promocyjnych meczu",
      "Wyróżnienie w zapowiedzi meczu",
      "Post w mediach społecznościowych",
      "Możliwość aktywacji podczas meczu",
      "Zdjęcia z meczu do wykorzystania",
    ],
    featured: false,
  },
  {
    name: "Sponsor Sezonu",
    description: "Kompleksowa współpraca przez cały sezon",
    features: [
      "Logo na stroju meczowym",
      "Stała obecność na stronie WWW",
      "Baner w hali podczas meczów domowych",
      "Regularne posty w mediach społecznościowych",
      "Udział w spotkaniach Rady Mecenasów",
      "Udział w wydarzeniach klubowych",
      "Materiały foto/video do własnych celów",
    ],
    featured: true,
  },
  {
    name: "Sponsor Emocji",
    description: "Obecność przy najważniejszych momentach",
    features: [
      "Logo przy relacjach z meczów",
      "Branding materiałów wideo",
      "Wyróżnienie w podsumowaniach",
      "Dostęp do contentu foto/video",
      "Wspólne akcje w social media",
    ],
    featured: false,
  },
];

const benefits = [
  {
    icon: EyeIcon,
    title: "Widoczność",
    description: "Obecność marki podczas meczów i w materiałach klubowych",
  },
  {
    icon: ShareIcon,
    title: "Zasięgi",
    description: "Dotarcie do ogólnopolskiej społeczności poprzez media klubu",
  },
  {
    icon: FlameIcon,
    title: "Emocje",
    description: "Skojarzenie marki z pozytywnymi emocjami sportowymi",
  },
  {
    icon: TargetIcon,
    title: "Aktywacje",
    description: "Możliwość niestandardowych działań marketingowych",
  },
];

export default function SponsorzyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative text-white pt-28 pb-16 bg-navy">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/sponsorzy.jpg')", backgroundPosition: "65% 39%" }}
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Sponsorzy</h1>
          <p className="text-xl text-gray-200">
            Firmy, które grają z KPR
          </p>
        </div>
      </div>

      {/* Korzyści */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Dlaczego warto współpracować z KPR?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center group">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakiety sponsorskie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            Oferta sponsorska
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Dopasujemy współpracę do Twoich potrzeb. Poniższe pakiety to propozycje –
            jesteśmy otwarci na indywidualne rozwiązania.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {sponsorPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all relative ${
                  pkg.featured
                    ? "bg-navy text-white border-2 border-navy shadow-xl md:scale-105 md:py-12"
                    : "bg-gray-100 border border-gray-200"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-red text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                      Najkorzystniejszy
                    </span>
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${pkg.featured ? "text-white" : "text-navy"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-6 ${pkg.featured ? "text-gray-300" : "text-gray-600"}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.featured ? "text-red-light" : "text-navy"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={`text-sm ${pkg.featured ? "text-gray-200" : "text-gray-600"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/kontakt"
              className="inline-block bg-navy hover:bg-navy-dark text-white font-semibold py-4 px-8 rounded-lg transition-all text-lg hover:scale-105 hover:shadow-lg"
            >
              Porozmawiajmy o współpracy
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsorzy KPR */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Sponsorzy KPR</h2>

          {/* Sponsor Tytularny */}
          <div className="mb-10">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-semibold mb-4">Sponsor Tytularny</p>
            <div className="flex justify-center">
              <div className="bg-gradient-to-b from-cyan-50 via-sky-50/50 to-transparent border border-cyan-300/50 shadow-lg shadow-cyan-200/30 rounded-2xl px-10 py-6">
                <img src="/images/logo/fitdietaa.png" alt="Fit Dieta" className="h-24 md:h-36 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Sponsor Strategiczny */}
          <div className="mb-10">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">Sponsor Strategiczny</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { name: "Gmina Żukowo", logo: "/images/logo/gmina_zukowo.png" },
                { name: "Starostwo Powiatowe", logo: "/images/logo/mecenasi/herb-powiat kartuski.png" },
              ].map((s) => (
                <div key={s.name} className="bg-gradient-to-b from-slate-100 via-gray-50 to-transparent border border-slate-300/60 shadow-md shadow-slate-200/40 rounded-xl px-8 py-5">
                  <img src={s.logo} alt={s.name} className="h-16 md:h-24 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Sponsor Złoty */}
          <div className="mb-10">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] text-amber-600 font-semibold mb-4">Sponsor Złoty</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { name: "Świat Reklamy", logo: "/images/logo/mecenasi/świat reklamy.png" },
                { name: "Gryf", logo: "/images/logo/mecenasi/gryf.png" },
              ].map((s) => (
                <div key={s.name} className="bg-gradient-to-b from-amber-50 to-transparent border border-amber-300/60 shadow-md shadow-amber-200/40 rounded-xl px-6 py-4">
                  <img src={s.logo} alt={s.name} className="h-12 md:h-18 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Sponsor Srebrny */}
          <div className="mb-10">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-4">Sponsor Srebrny</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { name: "GOSZ", logo: "/images/logo/mecenasi/GOSZ.png" },
                { name: "Witek Deka", logo: "/images/logo/mecenasi/deka2.png" },
                { name: "Nata", logo: "/images/logo/mecenasi/nata.png" },
              ].map((s) => (
                <div key={s.name} className="bg-gradient-to-b from-gray-100 to-transparent border border-gray-300/60 shadow-sm shadow-gray-200/40 rounded-xl px-5 py-3">
                  <img src={s.logo} alt={s.name} className="h-10 md:h-14 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Sponsor Brązowy */}
          <div className="mb-10">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] text-orange-800 font-semibold mb-4">Sponsor Brązowy</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                { name: "BOTERM", logo: "/images/logo/mecenasi/BOTERM.png" },
                { name: "Aste", logo: "/images/logo/mecenasi/aste.png" },
                { name: "Elektromaster", logo: "/images/logo/mecenasi/ELEKTROMAJSTER.png" },
                { name: "OX System", logo: "/images/logo/mecenasi/ox_system.png" },
                { name: "T.N.T.", logo: "/images/logo/mecenasi/T.N.T.png" },
                { name: "Budmax", logo: "/images/logo/mecenasi/budmax.png" },
                { name: "KIA", logo: "/images/logo/mecenasi/KIA.png" },
                { name: "Wantrans", logo: "/images/logo/mecenasi/wantrans.png" },
                { name: "CWP", logo: "/images/logo/mecenasi/cwp.png" },
                { name: "Repiński", logo: "/images/logo/mecenasi/Repiński.png" },
                { name: "Motion Clinic", logo: "/images/logo/mecenasi/MOTION-CLINIC.png" },
              ].map((s) => (
                <div key={s.name} className="bg-gradient-to-b from-orange-50 to-transparent border border-orange-300/50 shadow-sm shadow-orange-200/30 rounded-xl px-4 py-2.5">
                  <img src={s.logo} alt={s.name} className="h-7 md:h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/kontakt"
              className="text-red hover:text-red-dark font-semibold transition-colors"
            >
              Dołącz do grona sponsorów →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Zainteresowany współpracą?</h2>
          <p className="text-gray-300 mb-8">
            Skontaktuj się z nami – przygotujemy ofertę dopasowaną do Twoich celów marketingowych.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-red hover:bg-red-dark text-white font-semibold py-4 px-8 rounded-lg transition-all text-lg hover:scale-105 hover:shadow-lg"
          >
            Skontaktuj się
          </Link>
        </div>
      </section>
    </div>
  );
}
