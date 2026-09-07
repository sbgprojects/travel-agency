import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yeto-travels.vercel.app"),
  title: {
    default: "Yeto Holidays — Your Journey. Your Story. Your Yeto.",
    template: "%s | Yeto Holidays",
  },
  description:
    "Discover unforgettable holidays, carefully planned from departure to return. International and domestic tours, honeymoons, group departures and corporate travel.",
  keywords: [
    "Yeto Holidays",
    "travel agency",
    "international tour packages",
    "group tours",
    "honeymoon packages",
    "Dubai packages",
    "Vietnam tour",
    "Thailand packages",
  ],
  openGraph: {
    title: "Yeto Holidays — Your Journey. Your Story. Your Yeto.",
    description:
      "Discover unforgettable holidays, carefully planned from departure to return.",
    url: "https://yeto-travels.vercel.app",
    siteName: "Yeto Holidays",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeto Holidays",
    description:
      "Discover unforgettable holidays, carefully planned from departure to return.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e2f45",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="bg-white text-ocean-900 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ocean-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
