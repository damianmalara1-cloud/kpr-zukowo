import { TrophyIcon, UsersIcon, SeedlingIcon, HeartIcon, ChartIcon, HomeIcon, UserIcon } from "@/components/Icons";

export const metadata = {
  title: "O klubie | KPR Fitdieta Żukowo",
  description: "Historia i misja KPR Fitdieta Żukowo. Poznaj nasz klub piłki ręcznej.",
};

const boardMembers = [
  {
    name: "Jan Kowalski",
    role: "Prezes klubu",
    description: "Od ponad 10 lat związany z klubem. Pasjonat piłki ręcznej i lokalnej społeczności. Odpowiada za strategiczny rozwój KPR Żukowo oraz relacje z partnerami i sponsorami.",
  },
  {
    name: "Anna Nowak",
    role: "Wiceprezes",
    description: "Koordynuje codzienne działania klubu i współpracę z samorządem. Dba o rozwój sekcji młodzieżowych oraz organizację wydarzeń klubowych.",
  },
];

export default function OKlubiePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">O klubie</h1>
          <p className="text-xl text-gray-200">
            KPR Fitdieta Żukowo – piłka ręczna, emocje i społeczność
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
              Współpraca z firmą Fitdieta jako sponsorem tytularnym otworzyła nowy rozdział
              w historii klubu. Stawiamy na profesjonalizację przy zachowaniu lokalnego charakteru
              i bliskich relacji z kibicami.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dziś KPR Fitdieta Żukowo to nie tylko drużyna seniorów, ale również miejsce, gdzie
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
            Za codzienne funkcjonowanie klubu odpowiada zespół ludzi oddanych idei rozwoju
            piłki ręcznej w naszym regionie.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-navy mb-1">{member.name}</h3>
                    <p className="text-red font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* Hala */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Nasza hala</h2>

          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-xl text-navy mb-4">
              Hala Widowiskowo-Sportowa w Żukowie
            </h3>
            <p className="text-gray-600 mb-4">
              ul. Sportowa, 83-330 Żukowo
            </p>
            <p className="text-gray-500 text-sm">
              Nowoczesny obiekt sportowy, gdzie rozgrywamy nasze mecze domowe.
              Zapraszamy na każdy mecz – wstęp wolny!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
