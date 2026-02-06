import Link from "next/link";
import { EyeIcon, ShareIcon, FlameIcon, TargetIcon } from "@/components/Icons";

export const metadata = {
  title: "Sponsorzy | KPR Fitdieta Żukowo",
  description: "Oferta sponsorska KPR Fitdieta Żukowo. Widoczność, zasięgi, emocje i aktywacje marketingowe.",
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
    color: "bg-gray-100",
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
    color: "bg-red/10",
  },
  {
    name: "Partner Sezonu",
    description: "Kompleksowa współpraca przez cały sezon",
    features: [
      "Logo na stroju meczowym",
      "Stała obecność na stronie WWW",
      "Baner w hali podczas meczów domowych",
      "Regularne posty w mediach społecznościowych",
      "Udział w wydarzeniach klubowych",
      "Materiały foto/video do własnych celów",
    ],
    color: "bg-navy/10",
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
    description: "Dotarcie do lokalnej społeczności poprzez media klubu",
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
      <div className="bg-gradient-to-r from-navy to-navy-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
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

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`${pkg.color} rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-xl font-bold text-navy mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 mt-0.5 flex-shrink-0 text-navy"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
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

      {/* Aktualni partnerzy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-8">Nasi partnerzy</h2>

          <div className="flex flex-wrap justify-center items-center gap-16 mb-8">
            <img
              src="/images/logo/fitdietaa.png"
              alt="Fitdieta"
              className="h-24 md:h-32 w-auto object-contain"
            />
            <img
              src="/images/logo/gmina_zukowo.png"
              alt="Gmina Żukowo"
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>

          <Link
            href="/kontakt"
            className="text-red hover:text-red-dark font-semibold transition-colors"
          >
            Dołącz do grona partnerów →
          </Link>
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
