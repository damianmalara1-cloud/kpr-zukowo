import Link from "next/link";

const mainSponsors = [
  { name: "Gmina Żukowo", href: "https://www.zukowo.pl", logo: "/images/logo/gmina_zukowo.png" },
  { name: "Fitdieta", href: "https://www.fit-dieta.com", logo: "/images/logo/fitdietaa.png" },
];

const partners = [
  { name: "Aste", href: "#", logo: "/images/logo/mecenasi/aste.png" },
  { name: "Biznes po Kaszubsku", href: "#", logo: "/images/logo/mecenasi/biznes_po_kaszubsku.png" },
  { name: "BOTERM", href: "#", logo: "/images/logo/mecenasi/BOTERM.png" },
  { name: "Budmax", href: "#", logo: "/images/logo/mecenasi/budmax.png" },
  { name: "CWP", href: "#", logo: "/images/logo/mecenasi/cwp.png" },
  { name: "Deka2", href: "#", logo: "/images/logo/mecenasi/deka2.png" },
  { name: "Elektromajster", href: "#", logo: "/images/logo/mecenasi/ELEKTROMAJSTER.png" },
  { name: "First Stop", href: "#", logo: "/images/logo/mecenasi/first_stop.png" },
  { name: "GOSZ", href: "#", logo: "/images/logo/mecenasi/GOSZ.png" },
  { name: "Gryf", href: "#", logo: "/images/logo/mecenasi/gryf.png" },
  { name: "Powiat Kartuski", href: "#", logo: "/images/logo/mecenasi/herb-powiat kartuski.png" },
  { name: "JustGym", href: "#", logo: "/images/logo/mecenasi/JUSTGYM.png" },
  { name: "KIA", href: "#", logo: "/images/logo/mecenasi/KIA.png" },
  { name: "Motion Clinic", href: "#", logo: "/images/logo/mecenasi/MOTION-CLINIC.png" },
  { name: "Nata", href: "#", logo: "/images/logo/mecenasi/nata.png" },
  { name: "Okis", href: "#", logo: "/images/logo/mecenasi/okis.png" },
  { name: "OX System", href: "#", logo: "/images/logo/mecenasi/ox_system.png" },
  { name: "Pastelowa", href: "#", logo: "/images/logo/mecenasi/pastelowa.png" },
  { name: "PBS", href: "#", logo: "/images/logo/mecenasi/pbs.png" },
  { name: "Repiński", href: "#", logo: "/images/logo/mecenasi/Repiński.png" },
  { name: "Świat Reklamy", href: "#", logo: "/images/logo/mecenasi/świat reklamy.png" },
  { name: "T.N.T.", href: "#", logo: "/images/logo/mecenasi/T.N.T.png" },
  { name: "U Michała", href: "#", logo: "/images/logo/mecenasi/U Micha_a.png" },
  { name: "Wantrans", href: "#", logo: "/images/logo/mecenasi/wantrans.png" },
];

export default function SponsorsBar() {
  return (
    <section className="bg-white">
      {/* Sponsors tier 1 - main */}
      <div className="border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-6">
            Sponsorzy
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {mainSponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-transform duration-300 hover:scale-110"
                aria-label={sponsor.name}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-20 md:h-28 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors tier 2 - partners */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-5">
          Mecenasi klubu
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center transition-transform duration-300 hover:scale-110"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-7 md:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 pb-8 pt-2">
        <p className="text-center text-gray-500 text-sm mb-4">
          Chcesz budować z nami przyszłość lokalnego sportu?
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Link
            href="/mecenasi"
            className="inline-block bg-red hover:bg-red-dark text-white font-semibold py-2.5 px-6 rounded-lg transition-all hover:scale-105 hover:shadow-lg text-sm"
          >
            Dołącz do Mecenasów
          </Link>
          <Link
            href="/sponsorzy"
            className="inline-block bg-navy hover:bg-navy-dark text-white font-semibold py-2.5 px-6 rounded-lg transition-all hover:scale-105 hover:shadow-lg text-sm"
          >
            Współpracuj z KPR
          </Link>
        </div>
      </div>

      {/* Social media icons */}
      <div className="border-y border-gray-200">
        <ul className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-6">
          <li className="relative flex h-8 items-center justify-center">
            <a
              className="block text-gray-400 hover:text-navy transition-colors duration-200"
              href="https://www.facebook.com/kprzukowo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </li>
          <li className="relative flex h-8 items-center justify-center">
            <a
              className="block text-gray-400 hover:text-pink-600 transition-colors duration-200"
              href="https://www.instagram.com/kpr_zukowo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
          </li>
          <li className="relative flex h-8 items-center justify-center">
            <a
              className="block text-gray-400 hover:text-gray-900 transition-colors duration-200"
              href="https://www.tiktok.com/@kprzukowo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 448 512">
                <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0h88a121.18 121.18 0 001.86 22.17A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14z" />
              </svg>
            </a>
          </li>
          <li className="relative flex h-8 items-center justify-center">
            <a
              className="block text-gray-400 hover:text-red transition-colors duration-200"
              href="mailto:klub@kprzukowo.pl"
              aria-label="Email"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
