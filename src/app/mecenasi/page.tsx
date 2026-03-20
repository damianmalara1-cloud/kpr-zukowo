import Link from "next/link";
import Image from "next/image";
import { EyeIcon, UsersIcon, FlameIcon, HandshakeIcon } from "@/components/Icons";

export const metadata = {
  title: "Klub Biznesu | KPR Fit Dieta Żukowo",
  description: "Dołącz do Klubu Biznesu KPR Żukowo. Widoczność, relacje i realna współpraca w sercu lokalnej społeczności.",
};

const packages = [
  {
    name: "Partner Społeczności",
    price: "199",
    description: "Realizacja celów wizerunkowych i CSR.",
    features: [
      "Wyjątkowy Certyfikat Partnera",
      "Wymienienie w zbiorczej grafice \u201EPartnerzy Społeczności\u201D",
      "Podziękowanie na stronie klubu",
      "Zaproszenie na otwarcie sezonu Klubu Biznesu",
    ],
    highlighted: false,
    limit: null,
    cta: "Zacznij jako Partner",
  },
  {
    name: "Partner Lokalny",
    price: "499",
    description: "Aktywny członek środowiska biznesowego KPR.",
    features: [
      "Wszystko z poziomu Partnera Społeczności",
      "Indywidualne logo na stronie (z linkiem)",
      "Ekspozycja na Tablicy Partnerów w hali",
      "Min. 2 publikacje rocznie w social media",
      "2 wejścia VIP w sezonie",
      "Udział w zamkniętych spotkaniach Klubu Biznesu KPR",
      "Sponsor Meczu w cenie preferencyjnej: 1 700 zł",
    ],
    highlighted: true,
    limit: "Limit: 30 firm",
    cta: "Dołącz jako Partner Lokalny",
  },
  {
    name: "Partner Strategiczny",
    price: "1 200",
    description: "Elitarny networking B2B \u2013 silne utożsamienie z projektem KPR.",
    features: [
      "Wszystko z poziomu Partnera Lokalnego",
      "Wyróżniona ekspozycja na Tablicy Partnerów",
      "4 wejścia VIP w sezonie",
      "1 dedykowany post sponsorowany w sezonie",
      "Aktywacja marki w hali (roll-up / stoisko)",
      "Pierwszeństwo zakupu Sponsora Meczu",
      "Sponsor Meczu w cenie preferencyjnej: 1 200 zł (maks. 1/sezon)",
    ],
    highlighted: false,
    limit: "Limit: 15 firm",
    cta: "Porozmawiajmy o partnerstwie strategicznym",
  },
];

const currentPartners = [
  { name: "Fit Dieta", logo: "/images/logo/fitdietaa.png" },
  { name: "Gmina Żukowo", logo: "/images/logo/gmina_zukowo.png" },
  { name: "Starostwo Powiatowe", logo: "/images/logo/mecenasi/herb-powiat kartuski.png" },
  { name: "Aste", logo: "/images/logo/mecenasi/aste.png" },
  { name: "Biznes po Kaszubsku", logo: "/images/logo/mecenasi/biznes_po_kaszubsku.png" },
  { name: "BOTERM", logo: "/images/logo/mecenasi/BOTERM.png" },
  { name: "Budmax", logo: "/images/logo/mecenasi/budmax.png" },
  { name: "CWP", logo: "/images/logo/mecenasi/cwp.png" },
  { name: "Deka2", logo: "/images/logo/mecenasi/deka2.png" },
  { name: "Elektromajster", logo: "/images/logo/mecenasi/ELEKTROMAJSTER.png" },
  { name: "GOSZ", logo: "/images/logo/mecenasi/GOSZ.png" },
  { name: "Gryf", logo: "/images/logo/mecenasi/gryf.png" },
  { name: "JustGym", logo: "/images/logo/mecenasi/JUSTGYM.png" },
  { name: "KIA", logo: "/images/logo/mecenasi/KIA.png" },
  { name: "Motion Clinic", logo: "/images/logo/mecenasi/MOTION-CLINIC.png" },
  { name: "Nata", logo: "/images/logo/mecenasi/nata.png" },
  { name: "Okis", logo: "/images/logo/mecenasi/okis.png" },
  { name: "OX System", logo: "/images/logo/mecenasi/ox_system.png" },
  { name: "PBS", logo: "/images/logo/mecenasi/pbs.png" },
  { name: "Repiński", logo: "/images/logo/mecenasi/Repiński.png" },
  { name: "Świat Reklamy", logo: "/images/logo/mecenasi/świat reklamy.png" },
  { name: "T.N.T.", logo: "/images/logo/mecenasi/T.N.T.png" },
  { name: "U Michała", logo: "/images/logo/mecenasi/U Micha_a.png" },
  { name: "Wantrans", logo: "/images/logo/mecenasi/wantrans.png" },
];

const faqItems = [
  {
    q: "Czy dostaję fakturę i jak wygląda rozliczenie?",
    a: "Tak — wystawiamy fakturę VAT. Rozliczenie odbywa się miesięcznie lub kwartalnie, w zależności od pakietu. Wszystko formalnie i przejrzyście.",
  },
  {
    q: "Jak często pojawia się moja firma w social media?",
    a: "W pakiecie Partner Lokalny — minimum 2 publikacje rocznie (post lub relacja). W pakiecie Partner Strategiczny — dodatkowo dedykowany post sponsorowany. Szczegóły ustalamy indywidualnie.",
  },
  {
    q: "Czy mogę zmienić pakiet w trakcie sezonu?",
    a: "Oczywiście. Możesz przejść na wyższy pakiet w dowolnym momencie — różnicę rozliczamy proporcjonalnie.",
  },
  {
    q: "Co oznacza \u201EPartner Meczu\u201D i jak to działa?",
    a: "Partner Meczu to format jednorazowej aktywacji: Twoja firma jest wyróżniona podczas konkretnego meczu domowego — komunikat spikera, ekspozycja w materiałach i w social media.",
  },
  {
    q: "Jakie są przykłady aktywacji dla Partnerów?",
    a: "Konkurs dla kibiców z nagrodami od Partnera, strefa marki w hali, \u201Enagroda Partnera\u201D dla MVP meczu, wspólne akcje w social media, eventy dla pracowników firmy.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function MecenasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO — skrócony na mobile */}
      <div className="relative text-white pt-28 pb-12 md:pb-20 bg-navy">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/mecenasi.jpg')", backgroundPosition: "100% 65%" }}
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Klub Biznesu KPR Żukowo
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            Biznes, który gra razem z nami — widoczność, relacje i realna współpraca w sercu lokalnej społeczności.
          </p>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Dołącz do grona firm, które budują markę w Żukowie i okolicy poprzez sport, emocje i wspólne działania. To nie „darowizna" — to partnerski pakiet obecności, rekomendacji i kontaktów.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-10">
            <Link
              href="/kontakt"
              className="inline-block bg-red hover:bg-red-dark text-white font-semibold py-3.5 px-8 rounded-lg transition-[color,background-color,transform,box-shadow] hover:scale-105 hover:shadow-lg text-lg"
            >
              Umów rozmowę — 15 minut
            </Link>
          </div>

          {/* Trust bar — ukryty na mobile */}
          <div className="hidden md:flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Lokalne zasięgi i ekspozycja na meczach
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Networking firm z regionu
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Dedykowane aktywacje (mecz / social / hala)
            </span>
          </div>
        </div>
      </div>

      {/* PAKIETY PARTNERSTWA — zaraz po hero */}
      <section id="pakiety" className="py-12 md:py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">Pakiety partnerstwa</h2>
          <p className="text-gray-600 text-center mb-10 md:mb-12 max-w-2xl mx-auto">
            Wybierz poziom obecności Twojej marki. Ceny zostają, zakres dopasujemy do celów firmy.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 transition-[transform,box-shadow] hover:shadow-xl flex flex-col ${
                  pkg.highlighted
                    ? "bg-navy text-white shadow-xl md:scale-105"
                    : "bg-white shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Badge row */}
                <div className="h-7 flex flex-wrap items-center justify-center gap-2 mb-4">
                  {pkg.highlighted && (
                    <span className="inline-block bg-red text-white text-xs px-3 py-1 rounded-full">
                      Rekomendowany
                    </span>
                  )}
                  {pkg.limit && (
                    <span className={`inline-block text-xs px-3 py-1 rounded-full font-semibold ${
                      pkg.highlighted ? "bg-white/20 text-white" : "bg-navy/10 text-navy"
                    }`}>
                      {pkg.limit}
                    </span>
                  )}
                </div>

                <h3 className={`text-xl font-bold mb-2 text-center ${pkg.highlighted ? "text-white" : "text-navy"}`}>
                  {pkg.name}
                </h3>

                <p className={`text-sm mb-5 text-center ${pkg.highlighted ? "text-gray-300" : "text-gray-500"}`}>
                  {pkg.description}
                </p>

                <div className="mb-6 text-center">
                  <span className={`text-4xl font-bold ${pkg.highlighted ? "text-white" : "text-navy"}`}>
                    {pkg.price}
                  </span>
                  <span className={pkg.highlighted ? "text-gray-300" : "text-gray-500"}> zł/mies.</span>
                </div>

                <div className={`border-t mb-6 ${pkg.highlighted ? "border-white/20" : "border-gray-200"}`} />

                <ul className="space-y-3 mb-8 flex-grow">
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
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-[color,background-color,transform] hover:scale-105 mt-auto ${
                    pkg.highlighted
                      ? "bg-red hover:bg-red-dark text-white"
                      : "bg-navy hover:bg-navy-dark text-white"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego Klub Biznesu? — kompaktowa sekcja wartości */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-3">
            Dlaczego Klub Biznesu?
          </h2>
          <p className="text-lg text-gray-500 font-medium text-center mb-10">
            Kameralne grono firm, które łączy sport, relacje i wspólne cele biznesowe.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandshakeIcon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Networking i polecenia</h3>
              <p className="text-gray-500 text-sm">Poznaj przedsiębiorców z regionu, buduj relacje i korzystaj z rekomendacji w zamkniętej społeczności Partnerów.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <EyeIcon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Widoczność i aktywacje</h3>
              <p className="text-gray-500 text-sm">Twoja marka w hali i online. Możliwość aktywacji „Partner Meczu", konkursów i działań z kibicami.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlameIcon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Marka, która zostaje w pamięci</h3>
              <p className="text-gray-500 text-sm">Sport buduje emocje. Partnerstwo z KPR przenosi je na Twoją firmę — w sposób autentyczny i lokalny.</p>
            </div>
          </div>

          {/* Limitowane */}
          <div className="bg-navy/5 border border-navy/10 rounded-2xl p-6">
            <p className="text-center text-gray-600 text-sm leading-relaxed">
              <span className="inline-block bg-red text-white text-xs font-bold px-3 py-1 rounded-full mr-2 align-middle">
                Limitowane
              </span>
              Limitowana liczba miejsc — żeby networking działał. Utrzymujemy kameralny format, aby Partnerzy faktycznie się znali, polecali i robili wspólne działania.
            </p>
          </div>
        </div>
      </section>

      {/* Jak dołączyć? */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Jak dołączyć?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Wybierasz pakiet lub umawiasz rozmowę",
                desc: "15-minutowa rozmowa wystarczy, żebyśmy dopasowali współpracę do Twoich celów.",
              },
              {
                step: "2",
                title: "Ustalamy cele",
                desc: "Widoczność, rekrutacja, klienci, wizerunek — wspólnie określamy, na czym Ci zależy.",
              },
              {
                step: "3",
                title: "Startujemy",
                desc: "Publikujemy Twoją firmę jako Partnera i ruszamy z działaniami.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerzy — horyzontalny scroll na mobile */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-6">
            Partnerzy, którzy grają z KPR
          </p>
          <div className="flex overflow-x-auto md:flex-wrap md:justify-center items-center gap-4 md:gap-8 pb-4 md:pb-0 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {currentPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start bg-gray-50 px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Najczęstsze pytania</h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-navy hover:bg-gray-50 transition-colors">
                  {item.q}
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA końcowe */}
      <section className="py-12 md:py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Zainteresowany współpracą?</h2>
          <p className="text-gray-300 mb-8">
            Skontaktuj się z nami — przygotujemy ofertę dopasowaną do celów Twojej firmy.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-red hover:bg-red-dark text-white font-semibold py-4 px-8 rounded-lg transition-[color,background-color,transform,box-shadow] text-lg hover:scale-105 hover:shadow-lg"
          >
            Umów rozmowę — 15 minut
          </Link>
        </div>
      </section>
    </div>
  );
}
