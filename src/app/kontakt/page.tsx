import { LocationIcon, MailIcon, PhoneIcon } from "@/components/Icons";

export const metadata = {
  title: "Kontakt | KPR Fitdieta Żukowo",
  description: "Skontaktuj się z KPR Fitdieta Żukowo. Współpraca, pytania, media.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative text-white pt-28 pb-16 bg-navy">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/kontakt.jpg')", backgroundPosition: "center 90%" }}
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
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
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-navy/20 transition-colors">
                  <LocationIcon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Adres</h3>
                  <p className="text-gray-600">
                    Szkoła Podstawowa nr 2 im. Jana Heweliusza<br />
                    ul. Armii Krajowej 2e<br />
                    83-330 Żukowo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-navy/20 transition-colors">
                  <MailIcon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">E-mail</h3>
                  <p className="text-gray-600">
                    <a href="mailto:klub@kprzukowo.pl" className="text-red hover:text-red-dark transition-colors">
                      klub@kprzukowo.pl
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Social media</h3>
                  <div className="flex gap-5 mt-3">
                    <a
                      href="https://www.facebook.com/kprzukowo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-navy transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/kpr_zukowo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-600 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@kprzukowo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-900 transition-colors"
                      aria-label="TikTok"
                    >
                      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0h88a121.18 121.18 0 001.86 22.17A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14z" />
                      </svg>
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
