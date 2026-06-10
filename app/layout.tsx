import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteCursor from "./components/SiteCursor";
import ClickSound from "./components/ClickSound";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexsidhu.com"),
  title: {
    default: "Alex Sidhu",
    template: "%s · Alex Sidhu",
  },
  description:
    "Alex Sidhu, co-founder of Whitehorse AI in Sydney. Thoughts on AI, building businesses, and life, plus a newsletter.",
  openGraph: {
    title: "Alex Sidhu",
    description:
      "Thoughts on AI, building businesses, and life, plus a newsletter.",
    url: "https://alexsidhu.com",
    siteName: "Alex Sidhu",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Alex Sidhu",
    description:
      "Thoughts on AI, building businesses, and life, plus a newsletter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-warm-text antialiased">
        {children}
        <SiteCursor />
        <ClickSound />
      </body>
    </html>
  );
}
