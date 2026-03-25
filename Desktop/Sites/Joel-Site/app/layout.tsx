import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JM Digital Solutions — Websites for Local Businesses",
  description: "Custom websites for restaurants, wellness spaces, and local businesses in Luxembourg and Switzerland. Built from scratch, delivered fast.",
  openGraph: {
    title: "JM Digital Solutions — Websites for Local Businesses",
    description: "Custom websites for restaurants, wellness spaces, and local businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${jost.variable} font-body bg-background text-textPrimary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
