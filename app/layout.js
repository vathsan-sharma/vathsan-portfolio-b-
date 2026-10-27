import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "../lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vathsan Sharma · Research and performance marketing",
    template: "%s · Vathsan Sharma",
  },
  description:
    "Research and performance marketing for AI, ML and technical products. 9+ years in paid media, $1.5M+ managed ad spend, with a background in computer science.",
  openGraph: {
    title: "Vathsan Sharma · Research and performance marketing",
    description:
      "Research and performance marketing for AI, ML and technical products. 9+ years in paid media, $1.5M+ managed ad spend, with a background in computer science.",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vathsan Sharma · Research and performance marketing",
    description:
      "Research and performance marketing for AI, ML and technical products. 9+ years in paid media, $1.5M+ managed ad spend, with a background in computer science.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Search Console ownership token. Set GOOGLE_SITE_VERIFICATION to the value Google gives you.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport = {
  themeColor: "#f5f5f7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
