import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SponsorsBar from "@/components/SponsorsBar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "KPR Fitdieta Żukowo | Piłka ręczna, emocje i społeczność",
  description: "Oficjalna strona klubu piłki ręcznej KPR Fitdieta Żukowo. Budujemy klub, który łączy sportową rywalizację z lokalną społecznością. Darmowe wejście, pełna hala i prawdziwe emocje.",
  keywords: ["KPR Żukowo", "piłka ręczna", "Żukowo", "handball", "Fitdieta", "sport", "Pomorze"],
  authors: [{ name: "KPR Fitdieta Żukowo" }],
  openGraph: {
    title: "KPR Fitdieta Żukowo",
    description: "Tu zaczyna się historia. Piłka ręczna, emocje i społeczność.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <SponsorsBar />
        <Footer />
      </body>
    </html>
  );
}
