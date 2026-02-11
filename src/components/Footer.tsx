import Link from "next/link";

const footerLinks = {
  klub: [
    { href: "/o-klubie", label: "O klubie" },
    { href: "/druzyna", label: "Drużyna" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  mecze: [
    { href: "/mecze", label: "Terminarz" },
    { href: "/aktualnosci", label: "Aktualności" },
  ],
  wspolpraca: [
    { href: "/mecenasi", label: "Klub Partnerów" },
    { href: "/sponsorzy", label: "Sponsorzy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 text-center">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/images/logo/kpr_zukowo_beztla.png"
                alt="KPR Żukowo"
                className="h-16 w-auto mx-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm">
              Piłka ręczna, emocje i społeczność.
              Budujemy klub, który łączy sportową rywalizację z lokalną społecznością.
            </p>
          </div>

          {/* Klub */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Klub</h3>
            <ul className="space-y-2">
              {footerLinks.klub.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mecze */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Mecze</h3>
            <ul className="space-y-2">
              {footerLinks.mecze.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Współpraca */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Współpraca</h3>
            <ul className="space-y-2">
              {footerLinks.wspolpraca.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-light mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} KPR Fit Dieta Żukowo. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
