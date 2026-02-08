import Link from "next/link";
import { TicketIcon, FlameIcon, UsersIcon } from "@/components/Icons";

export const metadata = {
  title: "Kibice & Społeczność | KPR Fitdieta Żukowo",
  description: "Dołącz do społeczności KPR Fitdieta Żukowo. Tu zaczyna się historia!",
};

export default function KibicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative text-white pt-28 pb-16 bg-navy">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/kibice.jpg')", backgroundPosition: "70% 45%" }}
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Kibice & Społeczność</h1>
          <p className="text-xl text-gray-200">
            Tu zaczyna się historia
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">
            Więcej niż klub – to społeczność
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            KPR Fitdieta Żukowo to miejsce, gdzie spotykają się pokolenia.
            Dzieci, rodzice, dziadkowie – wszyscy razem kibicują naszej drużynie.
            Każdy mecz domowy to święto dla całej społeczności Żukowa i okolic.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-navy/5 rounded-full px-6 py-2 hover:bg-navy/10 transition-colors">
              <span className="text-navy font-semibold">Darmowy wstęp</span>
            </div>
            <div className="bg-navy/5 rounded-full px-6 py-2 hover:bg-navy/10 transition-colors">
              <span className="text-navy font-semibold">Rodzinna atmosfera</span>
            </div>
            <div className="bg-navy/5 rounded-full px-6 py-2 hover:bg-navy/10 transition-colors">
              <span className="text-navy font-semibold">Prawdziwe emocje</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego warto */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Dlaczego warto przyjść na mecz?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TicketIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Wstęp wolny</h3>
              <p className="text-gray-500 text-sm">
                Wszystkie mecze domowe są bezpłatne. Przyjdź z całą rodziną!
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlameIcon className="w-8 h-8 text-red" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Emocje na żywo</h3>
              <p className="text-gray-500 text-sm">
                Piłka ręczna to jeden z najszybszych sportów halowych. Adrenalina gwarantowana!
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Dla całej rodziny</h3>
              <p className="text-gray-500 text-sm">
                Mecze to świetna okazja na wspólne spędzenie czasu z bliskimi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jak kibicować */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Jak kibicować KPR?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">Przyjdź na mecz</h3>
                <p className="text-gray-600 text-sm">
                  Sprawdź terminarz i zarezerwuj sobie czas. Pamiętaj – wstęp wolny!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">Obserwuj nas w social media</h3>
                <p className="text-gray-600 text-sm">
                  Bądź na bieżąco z życiem klubu. Relacje, zapowiedzi, kulisy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">Przyprowadź znajomych</h3>
                <p className="text-gray-600 text-sm">
                  Im więcej nas na trybunach, tym większa moc dla drużyny!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">Kibicuj głośno!</h3>
                <p className="text-gray-600 text-sm">
                  Twoje dopingowanie napędza zawodników do walki do ostatniej sekundy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Do zobaczenia na meczu!</h2>
          <p className="text-gray-300 mb-8">
            Sprawdź kiedy gramy i dołącz do naszej społeczności
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mecze"
              className="inline-block bg-red hover:bg-red-dark text-white font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105"
            >
              Zobacz terminarz
            </Link>
            <a
              href="https://www.facebook.com/kprzukowo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105"
            >
              Obserwuj na Facebooku
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
