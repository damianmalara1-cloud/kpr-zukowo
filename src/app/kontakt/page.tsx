import { LocationIcon, MailIcon, PhoneIcon } from "@/components/Icons";

export const metadata = {
  title: "Kontakt | KPR Fitdieta Żukowo",
  description: "Skontaktuj się z KPR Fitdieta Żukowo. Współpraca, pytania, media.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Kontakt</h1>
          <p className="text-xl text-gray-200">
            Masz pytania? Chcesz współpracować? Napisz do nas!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Informacje kontaktowe */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-8">Dane kontaktowe</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-navy/20 transition-colors">
                  <LocationIcon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Adres</h3>
                  <p className="text-gray-600">
                    Hala Widowiskowo-Sportowa<br />
                    ul. Sportowa<br />
                    83-330 Żukowo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-navy/20 transition-colors">
                  <MailIcon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">E-mail</h3>
                  <p className="text-gray-600">
                    <a href="mailto:kontakt@kprzukovo.pl" className="text-red hover:text-red-dark transition-colors">
                      kontakt@kprzukovo.pl
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-navy/20 transition-colors">
                  <PhoneIcon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Social media</h3>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://www.facebook.com/kprzukovo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-red transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/kprzukovo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-red transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tematy kontaktu */}
            <div className="mt-12">
              <h3 className="font-semibold text-navy mb-4">W jakiej sprawie piszesz?</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-navy/30 hover:shadow-md transition-all">
                  <p className="font-medium text-navy">Współpraca sponsorska</p>
                  <p className="text-sm text-gray-500">Oferty, pakiety, indywidualne rozwiązania</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-navy/30 hover:shadow-md transition-all">
                  <p className="font-medium text-navy">Mecenat</p>
                  <p className="text-sm text-gray-500">Dołączenie do Rady Mecenasów</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-navy/30 hover:shadow-md transition-all">
                  <p className="font-medium text-navy">Treningi</p>
                  <p className="text-sm text-gray-500">Zapisy, treningi, informacje</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-navy/30 hover:shadow-md transition-all">
                  <p className="font-medium text-navy">Media</p>
                  <p className="text-sm text-gray-500">Akredytacje, materiały prasowe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formularz kontaktowy */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-8">Napisz do nas</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Temat
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                >
                  <option value="">Wybierz temat</option>
                  <option value="sponsoring">Współpraca sponsorska</option>
                  <option value="mecenat">Mecenat</option>
                  <option value="treningi">Treningi</option>
                  <option value="media">Media</option>
                  <option value="inne">Inne</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all resize-none"
                  placeholder="Treść wiadomości..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red hover:bg-red-dark text-white font-semibold py-4 px-6 rounded-lg transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                Wyślij wiadomość
              </button>

              <p className="text-sm text-gray-500 text-center">
                Odpowiadamy zazwyczaj w ciągu 24-48 godzin.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
