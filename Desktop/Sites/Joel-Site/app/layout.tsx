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
  metadataBase: new URL('https://jmdigitalsolutions.com'),
  title: {
    default: "JM Digital Solutions | Custom Websites for Local Businesses",
    template: "%s | JM Digital Solutions",
  },
  description: "Custom websites for restaurants, wellness spaces, and local businesses in Luxembourg & Switzerland. Built from scratch, delivered fast. From €1,500.",
  keywords: [
    "web design Luxembourg",
    "website development Switzerland",
    "custom websites",
    "restaurant website design",
    "wellness website design",
    "local business websites",
    "freelance web developer",
    "affordable web design",
  ],
  authors: [{ name: "Joel Magalhaes" }],
  creator: "Joel Magalhaes",
  publisher: "JM Digital Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jmdigitalsolutions.com",
    siteName: "JM Digital Solutions",
    title: "JM Digital Solutions | Custom Websites for Local Businesses",
    description: "Custom websites for restaurants, wellness spaces, and local businesses in Luxembourg & Switzerland. Built from scratch, delivered fast.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JM Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JM Digital Solutions | Custom Websites for Local Businesses",
    description: "Custom websites for restaurants, wellness spaces, and local businesses in Luxembourg & Switzerland.",
    images: ["/og-image.jpg"],
    creator: "@jmdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
