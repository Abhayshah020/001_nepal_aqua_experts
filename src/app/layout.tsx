import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AN | Advance National Pvt Ltd – Industrial & Commercial Solutions",
  description:
    "Advance National Pvt Ltd provides commercial laundry machines, water filtration, HVAC systems, elevators, fire-fighting equipment, waste treatment, and more across Nepal.",
  keywords:
    "commercial washing machine nepal, commercial dryer nepal, water filtration nepal, HVAC nepal, elevator nepal, fire fighting system nepal, laundry equipment nepal, advance national",
  openGraph: {
    title: "Advance National Pvt Ltd – Industrial & Commercial Solutions",
    description:
      "Nepal's leading supplier of commercial laundry, filtration, HVAC, elevator, fire safety, and waste treatment systems.",
    url: "https://www.advancenational.com.np",
    siteName: "Advance National Pvt Ltd",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advance National Pvt Ltd",
    description: "Industrial & Commercial Solutions in Nepal",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-slate-50 antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ChatBot />
        </LanguageProvider>
      </body>
    </html>
  );
}
