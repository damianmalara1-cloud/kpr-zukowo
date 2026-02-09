import { TrophyIcon, UsersIcon, SeedlingIcon, HeartIcon, ChartIcon, HomeIcon } from "@/components/Icons";
import BoardMembers from "@/components/BoardMembers";

export const metadata = {
  title: "O klubie | KPR Fit Dieta Żukowo",
  description: "Historia i misja KPR Fit Dieta Żukowo. Poznaj nasz klub piłki ręcznej.",
};

const boardMembers: { name: string; role: string; description: string; image?: string }[] = [
  {
    name: "Serge Bosca",
    role: "Prezes Klubu",
    description: "Doświadczony menedżer sportowy i biznesowy, od lat związany z zarządzaniem organizacjami sportowymi w Polsce (m.in. PGE Wybrzeże Gdańsk, Polski Związek Rugby). W KPR Fit Dieta Żukowo odpowiada za strategiczny rozwój klubu, budowę stabilnych struktur oraz długofalową wizję opartą na współpracy i profesjonalizacji.",
    image: "/images/staff/Serge_Bosca.png",
  },
  {
    name: "Damian Malara",
    role: "Sekretarz Klubu",
    description: "Od lat związany z piłką ręczną, multimedalista mistrzostw Polski w kategoriach juniorskich. Posiada doświadczenie w biznesie i budowaniu struktur organizacyjnych, aktywnie angażując się w rozwój młodzieży oraz długofalowy rozwój klubu.",
    image: "/images/Damian_Malara.jpg",
  },
];

export default function OKlubiePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative text-white pt-24 pb-16 bg-navy">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/o_klubie.jpg')", backgroundPosition: "left 20% top 15%" }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">O klubie</h1>
          <p className="text-xl text-gray-200">
            KPR Fit Dieta Żukowo – piłka ręczna, emocje i społeczność
          </p>
        </div>
      </div>

      {/* Misja */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Nasza misja</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              „Budujemy klub, który łączy sportową rywalizację z lokalną społecznością.
              <br />
              <span className="font-semibold text-navy">
                Darmowe wejście, pełna hala i prawdziwe emocje.
              </span>"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 group hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                <TrophyIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Sportowa rywalizacja</h3>
              <p className="text-gray-500 text-sm">
                Gramy ambitnie i walczymy o jak najlepsze wyniki w każdym meczu
              </p>
            </div>
            <div className="text-center p-6 group hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                <UsersIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Lokalna społeczność</h3>
              <p className="text-gray-500 text-sm">
                Każdy mecz to spotkanie mieszkańców Żukowa i okolic
              </p>
            </div>
            <div className="text-center p-6 group hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                <SeedlingIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Rozwój młodzieży</h3>
              <p className="text-gray-500 text-sm">
                Wychowujemy przyszłe pokolenia zawodników
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Historia klubu</h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <p className="text-gray-600 leading-relaxed mb-6">
              KPR Żukowo to klub z tradycjami, który od lat rozwija piłkę ręczną na Pomorzu.
              Nasza drużyna rywalizuje w rozgrywkach ligowych, budując pozycję jednego z ważniejszych
              ośrodków szczypiorniaka w regionie.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Współpraca z firmą Fit Dieta jako sponsorem tytularnym otworzyła nowy rozdział
              w historii klubu. Stawiamy na profesjonalizację przy zachowaniu lokalnego charakteru
              i bliskich relacji z kibicami.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dziś KPR Fit Dieta Żukowo to nie tylko drużyna seniorów, ale również miejsce, gdzie
              pasja do piłki ręcznej jest przekazywana młodym pokoleniom.
            </p>
          </div>
        </div>
      </section>

      {/* Zarząd klubu */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Zarząd klubu</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Za codzienne funkcjonowanie klubu odpowiadają ludzie oddani idei rozwoju
            piłki ręcznej w naszym regionie.
          </p>

          <BoardMembers members={boardMembers} />
        </div>
      </section>

      {/* Wartości */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nasze wartości</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Pasja</h3>
                <p className="text-gray-300 text-sm">
                  Piłka ręczna to nasza pasja, którą dzielimy się z całą społecznością
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Wspólnota</h3>
                <p className="text-gray-300 text-sm">
                  Budujemy relacje – między zawodnikami, kibicami i partnerami
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <ChartIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Rozwój</h3>
                <p className="text-gray-300 text-sm">
                  Ciągłe doskonalenie – sportowe i organizacyjne
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <HomeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Lokalność</h3>
                <p className="text-gray-300 text-sm">
                  Jesteśmy dumni z Żukowa i reprezentujemy naszą gminę
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
