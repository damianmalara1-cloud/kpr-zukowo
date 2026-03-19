import type { Metadata } from "next";
import { Lato, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalSponsorsBar from "@/components/ConditionalSponsorsBar";
import Footer from "@/components/Footer";

const oswaldHeading = Oswald({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const latoBody = Lato({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KPR Fit Dieta Żukowo | Piłka ręczna, emocje i społeczność",
  description: "Oficjalna strona klubu piłki ręcznej KPR Fit Dieta Żukowo. Budujemy klub, który łączy sportową rywalizację z lokalną społecznością. Darmowe wejście, pełna hala i prawdziwe emocje.",
  keywords: ["KPR Żukowo", "piłka ręczna", "Żukowo", "handball", "Fit Dieta", "sport", "Pomorze"],
  authors: [{ name: "KPR Fit Dieta Żukowo" }],
  openGraph: {
    title: "KPR Fit Dieta Żukowo",
    description: "Tu zaczyna się historia. Piłka ręczna, emocje i społeczność.",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KPR Fit Dieta Żukowo — drużyna piłki ręcznej",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KPR Fit Dieta Żukowo",
    description: "Tu zaczyna się historia. Piłka ręczna, emocje i społeczność.",
    images: ["/images/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  "@id": "https://kprzukowo.pl/#organization",
  name: "KPR Fit Dieta Żukowo",
  alternateName: "KPR Żukowo",
  url: "https://kprzukowo.pl",
  logo: "https://kprzukowo.pl/images/logo/kpr_zukowo_beztla.png",
  image: "https://kprzukowo.pl/images/og-image.jpg",
  description:
    "Klub piłki ręcznej z Żukowa. Budujemy klub, który łączy sportową rywalizację z lokalną społecznością.",
  sport: "Handball",
  memberOf: {
    "@type": "SportsOrganization",
    name: "Związek Piłki Ręcznej w Polsce",
    alternateName: "ZPRP",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Armii Krajowej 2e",
    addressLocality: "Żukowo",
    postalCode: "83-330",
    addressCountry: "PL",
  },
  email: "klub@kprzukowo.pl",
  sameAs: [
    "https://www.facebook.com/kprzukowo",
    "https://www.instagram.com/kpr_zukowo/",
    "https://www.tiktok.com/@kprzukowo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${oswaldHeading.variable} ${latoBody.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Przejdź do treści
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <ConditionalSponsorsBar />
        <Footer />
      </body>
    </html>
  );
}
