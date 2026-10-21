import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Vathsan Sharma · Growth, built from the ground up",
  description:
    "Vathsan Sharma: performance marketer and growth strategist with 9+ years, $1.5M+ in managed ad spend, and a mechatronics background.",
  openGraph: {
    title: "Vathsan Sharma · Growth, built from the ground up",
    description:
      "Performance marketer and growth strategist with 9+ years in paid media and a mechatronics background.",
    type: "website",
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
