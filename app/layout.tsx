import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://witherfate.com"),
  title: "Witherfate — A World Worth Returning To",
  description:
    "A premium, online-first action RPG built around persistent accomplishment, intentional cooperation, and an authored dark-fantasy world.",
  openGraph: {
    title: "Witherfate — A World Worth Returning To",
    description:
      "A persistent online world where everything that matters comes from playing within it.",
    url: "https://witherfate.com",
    siteName: "Witherfate",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Witherfate — A World Worth Returning To" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Witherfate — A World Worth Returning To",
    description:
      "A persistent online world where everything that matters comes from playing within it.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
