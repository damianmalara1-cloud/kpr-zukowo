import Link from "next/link";
import { EyeIcon, ShareIcon, FlameIcon, TargetIcon } from "@/components/Icons";
import EmocjeCategoryPicker from "./EmocjeCategoryPicker";

export const metadata = {
  title: "Sponsorzy | KPR Fit Dieta Żukowo",
  description: "Oferta sponsorska KPR Fit Dieta Żukowo. Widoczność, zasięgi, emocje i aktywacje marketingowe.",
};

/* ── Sponsor Meczu ── */
const sponsorMeczPhases = [
  {
    title: "Przed meczem",
    items: [
      "Logo na grafikach meczowych",
      "Post z oznaczeniem sponsora",
    ],
  },
  {
    title: "W trakcie meczu",
    items: [
      "Min. 4 komunikaty spikera",
      "Ekspozycja w hali (roll-up / baner)",
    ],
  },
  {
    title: "Po meczu",
    items: [
      "Post podsumowujący",
      "Zdjęcie z drużyną",
    ],
  },
  {
    title: "Hospitality",
    items: [
      "2 wejścia VIP",
      "Wspólne wejście na parkiet z drużyną (opcjonalnie)",
      "Materiał PR do profili firmowych",
    ],
  },
];

const pricingTable = [
  { level: "Partner Strategiczny", price: "1 200 zł", limit: "1 mecz / sezon", color: "text-red" },
  { level: "Partner Lokalny", price: "1 700 zł", limit: "1 mecz / sezon", color: "text-green-600" },
  { level: "Spoza Klubu Partnerów KPR", price: "2 500 zł", limit: "\u2014", color: "text-gray-600" },
];

const preferenceSteps = [
  { num: "1", label: "Partnerzy Strategiczni", desc: "Pierwszeństwo rezerwacji", bg: "bg-red" },
  { num: "2", label: "Partnerzy Lokalni", desc: "Następni w kolejce", bg: "bg-green-600" },
  { num: "3", label: "Sprzedaż otwarta", desc: "Każda firma spoza Klubu", bg: "bg-blue-600" },
];

/* ── Sponsor Sezonu ── */
const sezonFeatures = [
  "Centralna, wieloformatowa ekspozycja marki na głównych banerach (w zasięgu kamery)",
  "Gwarantowana obecność logotypu Sponsora na KAŻDYM materiale wideo",
  "Mecz Sponsora (Matchday Takeover) \u2014 jeden mecz w sezonie z pełnym pakietem: strefa Hospitality, Twoja marka na drużynie",
  "Pełna integracja z contentem klubowym (zdjęcia / wideo / web)",
  "Reklama stała w hali (podłoga / ściany)",
  "Obecność w materiałach drukowanych",
  "Dyspozycja logotypu na strojach meczowych / nagraniowych banerach",
  "Wyróżnione podstrona sponsora na stronie klubu",
  "VIP na każdym meczu domowym",
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

      {/* ═══ SPONSOR MECZU ═══ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-2">Sponsor Meczu</h2>
          <p className="text-gray-500 text-center mb-2 text-sm uppercase tracking-widest">KPR Fit Dieta Żukowo</p>
          <p className="text-center mb-1">
            <span className="text-5xl font-bold text-navy">2 500 zł</span>
          </p>
          <p className="text-gray-500 text-center text-sm mb-2">cena nominalna</p>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            Dostępny dla każdej firmy — członka Klubu lub spoza niego.
          </p>

          {/* 4 fazy */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {sponsorMeczPhases.map((phase) => (
              <div key={phase.title} className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Zasady preferencji */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
            <h3 className="text-2xl font-bold text-navy mb-2">Zasady preferencji</h3>
            <p className="text-gray-500 text-sm mb-8">Kolejność dostępu do Sponsora Meczu</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
              {preferenceSteps.map((step, i) => (
                <div key={step.num} className="flex items-center gap-4 md:gap-6">
                  <div className="text-center">
                    <div className={`w-14 h-14 ${step.bg} text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold`}>
                      {step.num}
                    </div>
                    <p className="font-bold text-navy text-sm">{step.label}</p>
                    <p className="text-gray-500 text-xs">{step.desc}</p>
                  </div>
                  {i < preferenceSteps.length - 1 && (
                    <svg className="w-6 h-6 text-gray-300 hidden md:block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            {/* Tabela porównania cen */}
            <div className="bg-navy rounded-xl overflow-hidden">
              <div className="px-4 md:px-6 py-4">
                <h4 className="text-white font-bold uppercase tracking-wide text-sm">Porównanie cen — Sponsor Meczu</h4>
              </div>

              {/* Desktop */}
              <table className="w-full text-sm hidden md:table">
                <thead>
                  <tr className="bg-navy-dark text-white/80 text-xs uppercase tracking-wider">
                    <th className="text-left px-6 py-3">Poziom</th>
                    <th className="text-center px-6 py-3">Cena za mecz</th>
                    <th className="text-center px-6 py-3">Limit preferencji</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {pricingTable.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className={`px-6 py-4 font-semibold ${row.color}`}>{row.level}</td>
                      <td className="px-6 py-4 text-center font-bold text-navy">{row.price}</td>
                      <td className="px-6 py-4 text-center text-gray-500">{row.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile — karty zamiast tabeli */}
              <div className="md:hidden space-y-2 p-3">
                {pricingTable.map((row, i) => (
                  <div key={i} className="bg-white rounded-lg p-4">
                    <p className={`font-semibold mb-2 ${row.color}`}>{row.level}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Cena:</span>
                      <span className="font-bold text-navy">{row.price}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-500">Limit:</span>
                      <span className="text-gray-600">{row.limit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/kontakt"
              className="inline-block bg-navy hover:bg-navy-dark text-white font-semibold py-3.5 px-8 rounded-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              Zarezerwuj Sponsoring Meczu
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SPONSORING SEZONOWY ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-4">Sponsoring sezonowy</p>
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Oferta na cały sezon</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sponsor Emocji */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-8 md:p-10 flex flex-col">
              <div className="text-center mb-8">
                <span className="text-3xl mb-2 block">&#9733;</span>
                <h3 className="text-2xl font-bold text-navy mb-1">Sponsor Emocji</h3>
                <p className="text-amber-700 text-sm font-medium mb-5">Patronat nad najważniejszymi momentami wideo</p>
                <p className="text-xl font-bold text-navy">Wyceniane indywidualnie</p>
                <p className="text-gray-500 text-sm">na podstawie celów Twojej marki</p>
              </div>

              {/* Wyróżniony social reach */}
              <div className="bg-navy rounded-xl p-5 mb-8 text-center">
                <p className="text-white text-xs uppercase tracking-widest mb-1">Zasięg wideo</p>
                <p className="text-3xl font-bold text-white mb-1">14–18 tys.</p>
                <p className="text-gray-300 text-sm">wyświetleń na post</p>
                <p className="text-amber-400 text-xs mt-2 font-medium">Zawieszcz ten format!</p>
              </div>

              {/* Interaktywny picker kategorii */}
              <div className="mb-8 flex-grow">
                <EmocjeCategoryPicker />
              </div>

              <div className={`border-t border-amber-200 pt-6 mb-6`} />

              <ul className="space-y-2 mb-8">
                {[
                  "Stałe oznaczenie w grafikach meczowych",
                  "Branding przy najważniejszych ujęciach",
                  "Oznaczenie w postach w social media",
                  "4 wejścia VIP na kulisy meczowe",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className="block text-center bg-navy hover:bg-navy-dark text-white font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105 mt-auto"
              >
                Zapytaj o Sponsoring Emocji
              </Link>
            </div>

            {/* Sponsor Sezonu */}
            <div className="bg-navy text-white rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wide">
                Premium
              </div>

              <div className="text-center mb-6">
                <span className="text-3xl mb-2 block">&#9733;</span>
                <h3 className="text-2xl font-bold mb-1">Sponsor Sezonu</h3>
                <p className="text-gray-300 text-sm font-medium mb-5">Kompleksowa współpraca przez cały sezon</p>
                <p className="text-xl font-bold text-white">Budżet szyty na miarę</p>
                <p className="text-gray-400 text-sm mt-1">negocjowany indywidualnie</p>
              </div>

              {/* Wyróżniony social reach */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-5 mb-8 text-center border border-white/20">
                <p className="text-white/70 text-xs uppercase tracking-widest mb-1">Zasięg w social media</p>
                <p className="text-4xl font-bold text-white mb-1">2 000 000+</p>
                <p className="text-gray-300 text-sm">wyświetleń w sezonie</p>
              </div>

              <p className="text-gray-300 text-sm mb-4">
                Pakiet zawiera wszystkie świadczenia z niższych poziomów (w tym Partnera Strategicznego) ORAZ:
              </p>

              <ul className="space-y-2 mb-8 flex-grow">
                {sezonFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-200">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 text-xs italic text-center mb-6">
                Na życzenie: Sponsor Tytularny — negocjowane indywidualnie.
              </p>

              <Link
                href="/kontakt"
                className="block text-center bg-red hover:bg-red-dark text-white font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105 mt-auto"
              >
                Umów rozmowę o Sponsoringu Sezonu
              </Link>
            </div>
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
