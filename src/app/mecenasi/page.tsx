import Link from "next/link";
import { UsersIcon, TrophyIcon, SeedlingIcon, HandshakeIcon, ChartIcon, HomeIcon } from "@/components/Icons";

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
      "Wyjątkowy certyfikat Mecenasa KPR",
      "Satysfakcja ze wsparcia lokalnego sportu",
    ],
    highlighted: false,
  },
  {
    name: "Mecenas Lokalny KPR",
    price: "499",
    description: "Rekomendowany pakiet dla lokalnych przedsiębiorców",
    features: [
      "Wszystkie korzyści pakietu Sympatyk KPR",
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
  { name: "Aste", logo: "/images/logo/mecenasi/aste.png" },
  { name: "Biznes po Kaszubsku", logo: "/images/logo/mecenasi/biznes_po_kaszubsku.png" },
  { name: "BOTERM", logo: "/images/logo/mecenasi/BOTERM.png" },
  { name: "Budmax", logo: "/images/logo/mecenasi/budmax.png" },
  { name: "CWP", logo: "/images/logo/mecenasi/cwp.png" },
  { name: "Deka2", logo: "/images/logo/mecenasi/deka2.png" },
  { name: "Elektromajster", logo: "/images/logo/mecenasi/ELEKTROMAJSTER.png" },
  { name: "First Stop", logo: "/images/logo/mecenasi/first_stop.png" },
  { name: "GOSZ", logo: "/images/logo/mecenasi/GOSZ.png" },
  { name: "Gryf", logo: "/images/logo/mecenasi/gryf.png" },
  { name: "Powiat Kartuski", logo: "/images/logo/mecenasi/herb-powiat kartuski.png" },
  { name: "JustGym", logo: "/images/logo/mecenasi/JUSTGYM.png" },
  { name: "KIA", logo: "/images/logo/mecenasi/KIA.png" },
  { name: "Motion Clinic", logo: "/images/logo/mecenasi/MOTION-CLINIC.png" },
  { name: "Nata", logo: "/images/logo/mecenasi/nata.png" },
  { name: "Okis", logo: "/images/logo/mecenasi/okis.png" },
  { name: "OX System", logo: "/images/logo/mecenasi/ox_system.png" },
  { name: "Pastelowa", logo: "/images/logo/mecenasi/pastelowa.png" },
  { name: "PBS", logo: "/images/logo/mecenasi/pbs.png" },
  { name: "Repiński", logo: "/images/logo/mecenasi/Repiński.png" },
  { name: "Świat Reklamy", logo: "/images/logo/mecenasi/świat reklamy.png" },
  { name: "T.N.T.", logo: "/images/logo/mecenasi/T.N.T.png" },
  { name: "U Michała", logo: "/images/logo/mecenasi/U Micha_a.png" },
  { name: "Wantrans", logo: "/images/logo/mecenasi/wantrans.png" },
];

export default function MecenasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative text-white pt-28 pb-16 bg-navy">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/mecenasi.jpg')", backgroundPosition: "100% 65%" }}
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
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
              <strong className="text-navy"> nie tylko dla reklamy, lecz także dla idei, wspólnoty i przyszłości sportu w gminie.</strong>"
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

      {/* Klub Biznesu KPR - Rada Mecenasów */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
                Rada Mecenasów — Klub Biznesu KPR Żukowo
              </h2>
              <p className="text-lg text-gray-500 font-medium">
                Kameralne grono lokalnych firm połączone sportem, relacjami i rozwojem.
              </p>
            </div>

            {/* Description */}
            <div className="text-gray-600 mb-12 max-w-3xl mx-auto space-y-4 leading-relaxed">
              <p>
                Rada Mecenasów to Klub Biznesu KPR zrzeszający lokalnych przedsiębiorców, którzy chcą wspólnie wspierać rozwój sportu, a jednocześnie budować wartościowe relacje biznesowe. To przestrzeń współpracy, wymiany doświadczeń i realnych kontaktów – zarówno na linii klub–przedsiębiorca, jak i przedsiębiorca–przedsiębiorca.
              </p>
              <p>
                Członkostwo w Radzie Mecenasów to więcej niż sponsoring. To dostęp do zamkniętego grona firm, regularne spotkania networkingowe, możliwość wspólnych inicjatyw oraz obecność w środowisku, które łączy sportowe emocje z biznesowym podejściem do rozwoju.
              </p>
              <p>
                Dołączając do Rady Mecenasów, stajesz się częścią projektu opartego na zaufaniu, długofalowym myśleniu i wspólnych celach — rozwoju klubu, lokalnej gospodarki i silnej społeczności wokół sportu.
              </p>
            </div>

            {/* Benefits row */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandshakeIcon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Relacje biznesowe</h3>
                <p className="text-gray-500 text-sm">Poznaj lokalnych przedsiębiorców i buduj realne kontakty.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartIcon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Współpraca i rozwój</h3>
                <p className="text-gray-500 text-sm">Rekomendacje, wspólne inicjatywy i projekty między firmami.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Prestiż i zaangażowanie</h3>
                <p className="text-gray-500 text-sm">Członkostwo w długofalowym projekcie opartym na zaufaniu.</p>
              </div>
            </div>

            {/* Limited seats notice */}
            <div className="bg-navy/5 border border-navy/10 rounded-2xl p-6 mb-10">
              <p className="text-center text-gray-600 text-sm leading-relaxed">
                <span className="inline-block bg-red text-white text-xs font-bold px-3 py-1 rounded-full mr-2 align-middle">
                  Limitowane
                </span>
                Rada Mecenasów to kameralne grono firm — liczba miejsc jest celowo ograniczona, aby zachować realny charakter relacji i współpracy.
              </p>
            </div>

            {/* Patron logos */}
            <div className="mb-10">
              <p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-6">
                Firmy w Radzie Mecenasów
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {currentPatrons.map((patron, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
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

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/kontakt"
                className="inline-block bg-red hover:bg-red-dark text-white font-semibold py-4 px-10 rounded-lg transition-all text-lg hover:scale-105 hover:shadow-lg"
              >
                Dołącz do Klubu Biznesu KPR
              </Link>
              <p className="text-gray-400 text-sm mt-3">
                Porozmawiajmy o najlepszym poziomie mecenatu dla Twojej firmy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pakiety mecenatu */}
      <section className="py-16 bg-white">
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
    </div>
  );
}
