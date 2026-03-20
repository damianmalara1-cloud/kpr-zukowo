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
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">Historia klubu</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Od sekcji w klubie wielosekcyjnym do samodzielnego klubu w I Lidze — droga KPR Żukowo przez kolejne szczeble polskiej piłki ręcznej.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy/20 -translate-x-1/2" />

            {[
              {
                year: "Początki",
                title: "Sekcja piłki ręcznej w GKS Żukowo",
                description: "Piłka ręczna w Żukowie ma korzenie sięgające pracy trenera Krzysztofa Milewskiego, który prowadził zajęcia dla młodzieży jeszcze przed formalnym powstaniem sekcji. Szczypiorniak rozwija się w ramach Gminnego Klubu Sportowego Żukowo — wielosekcyjnego klubu zrzeszającego różne dyscypliny w gminie.",
              },
              {
                year: "2004/2005",
                title: "Pierwsze zetknięcie z I Ligą",
                description: "Drużyna z Żukowa (pod nazwą KKKF Żukowo) po raz pierwszy występuje na poziomie I Ligi piłki ręcznej mężczyzn. Po tym sezonie klub na wiele lat wraca do niższych rozgrywek.",
              },
              {
                year: "2015/2016",
                title: "Wicemistrzostwo II Ligi i awans do I Ligi",
                description: "GKS Żukowo zajmuje drugie miejsce w grupie II Ligi (za Stalą Gorzów) i kwalifikuje się do barażu o awans. W dwumeczu z KPR Wolsztyniak Wolsztyn żukowianie wygrywają pierwszy mecz u siebie 29:24, a mimo porażki w rewanżu 22:25 awansują przewagą dwóch bramek w dwumeczu.",
              },
              {
                year: "2016/2017",
                title: "Debiut w I Lidze",
                description: "Jako beniaminek GKS Żukowo stawia czoła doświadczonym rywalom. Drużyna prowadzona przez trenerów Leszka Biernackiego i Jakuba Bonisławskiego utrzymuje się w lidze bez konieczności gry w barażach.",
              },
              {
                year: "2017",
                title: "Powstanie SPR GKS Żukowo",
                description: "Drużyna seniorów zostaje wyodrębniona jako samodzielny podmiot — Stowarzyszenie Piłki Ręcznej GKS Żukowo. Prezesem zostaje Szymon Biernacki. Zmiana podyktowana wymaganiami I Ligi, które wymuszają szybsze podejmowanie decyzji. Sekcja młodzieżowa pozostaje w strukturach GKS.",
              },
              {
                year: "2021",
                title: "Awans do Ligi Centralnej",
                description: "Żukowo awansuje do nowo utworzonej Ligi Centralnej — jako pierwsza drużyna z powiatu kartuskiego na tym poziomie rozgrywkowym. Klub potwierdza swoją pozycję wśród czołowych drużyn w kraju.",
              },
              {
                year: "2022",
                title: "Klub Piłki Ręcznej Żukowo Sp. z o.o.",
                description: "Kolejny krok w profesjonalizacji — powstaje KPR Żukowo jako spółka z ograniczoną odpowiedzialnością, w pełni należąca do SPR GKS Żukowo.",
              },
              {
                year: "2023/2024",
                title: "Najlepszy sezon w Lidze Centralnej",
                description: "KPR Autoinwest Żukowo zajmuje 4. miejsce w Lidze Centralnej — najlepszy wynik w historii klubu na tym poziomie rozgrywkowym. Juniorzy zdobywają tytuł Mistrzów Polski w piłce ręcznej plażowej.",
              },
              {
                year: "2024/2025",
                title: "KPR Fit Dieta Żukowo — nowy rozdział",
                description: "We wrześniu 2024 klub zmienia nazwę na KPR Fit Dieta Żukowo. Po sezonie w Lidze Centralnej drużyna rozpoczyna rywalizację w I Lidze. Prezesem zostaje Serge Bosca — doświadczony menedżer sportowy, wcześniej związany z PGE Wybrzeże Gdańsk i Polskim Związkiem Rugby.",
              },
            ].map((item, index) => (
              <div key={index} className={`relative flex items-start mb-10 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-red rounded-full border-4 border-white shadow -translate-x-1/2 z-10 mt-1.5" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <span className="inline-block text-sm font-bold text-red uppercase tracking-wider mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
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
