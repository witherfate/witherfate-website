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
  title: "Witherfate — The End Is Near",
  description:
    "A premium, server-authoritative action RPG built for intentional group play, persistent progression, and a world protected from real-world money.",
  openGraph: {
    title: "Witherfate — The End Is Near",
    description:
      "A world protected from real-world money, seasonal resets, and monetization systems built at the cost of the game.",
    url: "https://witherfate.com",
    siteName: "Witherfate",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Witherfate — The End Is Near" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Witherfate — The End Is Near",
    description:
      "A world protected from real-world money, seasonal resets, and monetization systems built at the cost of the game.",
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
