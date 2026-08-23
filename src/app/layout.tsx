import type { Metadata } from "next";
import { Syne, DM_Mono, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { GlobalParticleField } from "@/components/ui/ParticleField";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Devinda Rajawardhane — Data Analyst & CS Undergraduate",
  description:
    "Data Analyst, Business Analyst and Computer Science undergraduate specializing in Data Science. Proficient in Python, SQL, Power BI, statistical modeling, and data-driven storytelling.",
  keywords: [
    "data analyst",
    "data science",
    "portfolio",
    "python",
    "sql",
    "power bi",
    "tableau",
    "machine learning",
    "business analysis",
  ],
  authors: [{ name: "Devinda Rajawardhane" }],
  openGraph: {
    title: "Devinda Rajawardhane — Data Analyst & CS Undergraduate",
    description:
      "Data Analyst and CS undergraduate specializing in Data Science, based in Colombo, Sri Lanka.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devinda Rajawardhane — Data Analyst & CS Undergraduate",
    description:
      "Data Analyst and CS undergraduate specializing in Data Science, based in Colombo, Sri Lanka.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
          <GlobalParticleField />
          <SmoothScroll>{children}</SmoothScroll>
        </body>
    </html>
  );
}
