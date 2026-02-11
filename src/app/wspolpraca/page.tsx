import Link from "next/link";
import { EyeIcon, UsersIcon, FlameIcon, HandshakeIcon, TrophyIcon, ChartIcon } from "@/components/Icons";

export const metadata = {
  title: "Współpraca | KPR Fit Dieta Żukowo",
  description: "Wybierz formę współpracy z KPR Żukowo — zostań sponsorem lub dołącz do Klubu Partnerów.",
};

export default function WspolpracaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero z tłem */}
      <div className="relative text-white pt-28 pb-24 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/wspolpraca.jpg')", backgroundPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-red font-semibold uppercase tracking-widest text-sm mb-4 animate-fade-in">
            Razem gramy o więcej
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Współpracuj z KPR Żukowo
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Sport to emocje, ludzie i widoczność. Wybierz formę współpracy, która najlepiej pasuje do celów Twojej firmy.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <EyeIcon className="w-5 h-5 text-red" />
              <span>Widoczność marki</span>
            </div>
            <div className="flex items-center gap-2">
              <UsersIcon className="w-5 h-5 text-red" />
              <span>Networking</span>
            </div>
            <div className="flex items-center gap-2">
              <FlameIcon className="w-5 h-5 text-red" />
              <span>Emocje sportu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dwie ścieżki */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Sponsorzy */}
            <Link
              href="/sponsorzy"
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Tło karty */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-dark" />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ backgroundImage: "url('/images/sponsorzy.jpg')" }}
              />

              <div className="relative p-10 text-white">
                <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <TrophyIcon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Sponsorzy</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Oferta dla firm, które chcą promować swoją markę poprzez sport. Logo na strojach, banery w hali, obecność w materiałach meczowych i mediach społecznościowych.
                </p>

                {/* Bullet points */}
                <ul className="space-y-2 mb-8">
                  {[
                    "Logo na stroju meczowym i stała obecność na stronie",
                    "Logo w hali, na stronie i w social media",
                    "Dedykowane aktywacje marketingowe",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-semibold py-3 px-6 rounded-lg transition-all group-hover:gap-3">
                  Zobacz ofertę sponsorską
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Klub Partnerów */}
            <Link
              href="/mecenasi"
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Tło karty */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-dark" />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ backgroundImage: "url('/images/mecenasi.jpg')" }}
              />

              <div className="relative p-10 text-white">
                <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <HandshakeIcon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Klub Partnerów</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Program dla lokalnych przedsiębiorców, którzy chcą budować relacje biznesowe poprzez sport. Networking, zamknięte spotkania i wspólne inicjatywy.
                </p>

                {/* Bullet points */}
                <ul className="space-y-2 mb-8">
                  {[
                    "Trzy pakiety partnerstwa — już od 199 zł/mies.",
                    "Zamknięte spotkania i wzajemne rekomendacje",
                    "Kameralne grono firm z regionu",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-semibold py-3 px-6 rounded-lg transition-all group-hover:gap-3">
                  Poznaj Klub Partnerów
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Dlaczego KPR */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Dlaczego firmy współpracują z KPR?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                <EyeIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Lokalna widoczność</h3>
              <p className="text-gray-500 text-sm">Twoja marka tam, gdzie są ludzie i emocje — na meczach, w hali i w kanałach online.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                <ChartIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Realne kontakty</h3>
              <p className="text-gray-500 text-sm">Sport łączy ludzi. Współpraca z KPR to dostęp do sieci firm i społeczności lokalnej.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                <FlameIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Pozytywny wizerunek</h3>
              <p className="text-gray-500 text-sm">Firma wspierająca sport to firma, która angażuje się w lokalną społeczność. Ludzie to doceniają.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Nie wiesz, co wybrać?</h2>
          <p className="text-gray-300 mb-8">
            Napisz do nas — pomożemy dobrać najlepszą formę współpracy do celów Twojej firmy.
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
