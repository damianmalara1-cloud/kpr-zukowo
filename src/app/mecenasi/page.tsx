import Link from "next/link";
import { UsersIcon, TrophyIcon, SeedlingIcon } from "@/components/Icons";

export const metadata = {
  title: "Mecenasi KPR | KPR Fitdieta Żukowo",
  description: "Zostań Mecenasem KPR Fitdieta Żukowo. Wspieraj klub dla idei, wspólnoty i przyszłości sportu w gminie.",
};

const packages = [
  {
    name: "Sympatyk KPR",
    price: "199",
    description: "Symboliczne wsparcie klubu",
    features: [
      "Podziękowanie na stronie klubu",
      "Newsletter dla Mecenasów",
      "Satysfakcja ze wsparcia lokalnego sportu",
    ],
    highlighted: false,
  },
  {
    name: "Mecenas Lokalny KPR",
    price: "499",
    description: "Rekomendowany pakiet dla lokalnych przedsiębiorców",
    features: [
      "Tablica Mecenasów w hali",
      "Logo na stronie internetowej",
      "Udział w spotkaniach Rady Mecenasów",
      "Wspólne zdjęcie z drużyną",
      "Wyróżnienie w mediach społecznościowych",
    ],
    highlighted: true,
  },
  {
    name: "Mecenas Główny",
    price: "1 200",
    description: "Pakiet prestiżowy, limitowany",
    features: [
      "Wszystkie korzyści pakietu Mecenas Lokalny",
      "Eksponowane miejsce na tablicy Mecenasów",
      "Wyróżniona prezentacja na stronie",
      "Zaproszenie na wydarzenia klubowe",
      "Możliwość patronatu nad meczem",
    ],
    highlighted: false,
  },
];

const currentPatrons = [
  { name: "BOTERM", logo: "/images/logo/mecenasi/BOTERM.png" },
  { name: "CWP", logo: "/images/logo/mecenasi/CWP.jpg" },
];

export default function MecenasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Mecenasi KPR</h1>
          <p className="text-xl text-gray-200">
            Ludzie, którzy budują przyszłość klubu
          </p>
        </div>
      </div>

      {/* Filozofia mecenatu */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Filozofia mecenatu</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              „Mecenasi KPR Fitdieta Żukowo to lokalni przedsiębiorcy i osoby, które wspierają klub
              <strong className="text-navy"> nie dla reklamy, lecz dla idei, wspólnoty i przyszłości sportu w gminie.</strong>"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 group hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                <UsersIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Wspólnota</h3>
              <p className="text-gray-500 text-sm">Budujemy razem coś większego niż sport</p>
            </div>
            <div className="p-6 group hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                <TrophyIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Prestiż</h3>
              <p className="text-gray-500 text-sm">Bycie częścią elitarnego grona Mecenasów</p>
            </div>
            <div className="p-6 group hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                <SeedlingIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Przyszłość</h3>
              <p className="text-gray-500 text-sm">Inwestycja w młode pokolenie sportowców</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pakiety mecenatu */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Pakiety mecenatu</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 transition-all hover:shadow-xl ${
                  pkg.highlighted
                    ? "bg-navy text-white shadow-xl scale-105"
                    : "bg-white shadow-lg hover:-translate-y-1"
                }`}
              >
                {pkg.highlighted && (
                  <span className="inline-block bg-red text-white text-xs px-3 py-1 rounded-full mb-4">
                    Rekomendowany
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-2 ${pkg.highlighted ? "text-white" : "text-navy"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${pkg.highlighted ? "text-gray-300" : "text-gray-500"}`}>
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${pkg.highlighted ? "text-white" : "text-navy"}`}>
                    {pkg.price}
                  </span>
                  <span className={pkg.highlighted ? "text-gray-300" : "text-gray-500"}> zł/miesiąc</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-red" : "text-green-500"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={`text-sm ${pkg.highlighted ? "text-gray-200" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all hover:scale-105 ${
                    pkg.highlighted
                      ? "bg-red hover:bg-red-dark text-white"
                      : "bg-navy hover:bg-navy-dark text-white"
                  }`}
                >
                  Zostań Mecenasem
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rada Mecenasów */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Rada Mecenasów</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rada Mecenasów to prestiżowe grono osób, które aktywnie wspierają rozwój klubu.
            Raz w sezonie organizujemy wspólne spotkanie i sesję zdjęciową z drużyną.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <p className="text-red font-semibold mb-6">Liczba miejsc ograniczona</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {currentPatrons.map((patron, index) => (
                <div
                  key={index}
                  className="bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <img
                    src={patron.logo}
                    alt={patron.name}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/kontakt"
            className="inline-block bg-red hover:bg-red-dark text-white font-semibold py-4 px-8 rounded-lg transition-all text-lg hover:scale-105 hover:shadow-lg"
          >
            Dołącz do Rady Mecenasów
          </Link>
        </div>
      </section>
    </div>
  );
}
