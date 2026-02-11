import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalSponsorsBar from "@/components/ConditionalSponsorsBar";
import Footer from "@/components/Footer";

const latoHeading = Lato({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["700", "900"],
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
        className={`${latoHeading.variable} ${latoBody.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <ConditionalSponsorsBar />
        <Footer />
      </body>
    </html>
  );
}
