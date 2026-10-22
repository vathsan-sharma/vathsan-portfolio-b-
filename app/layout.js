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
    default: "Vathsan Sharma · Growth, built from the ground up",
    template: "%s · Vathsan Sharma",
  },
  description:
    "Vathsan Sharma: performance marketer and growth strategist with 9+ years, $1.5M+ in managed ad spend, and a mechatronics background.",
  openGraph: {
    title: "Vathsan Sharma · Growth, built from the ground up",
    description:
      "Performance marketer and growth strategist with 9+ years in paid media and a mechatronics background.",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vathsan Sharma · Growth, built from the ground up",
    description:
      "Performance marketer and growth strategist with 9+ years in paid media and a mechatronics background.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
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
