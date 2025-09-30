import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import "../styles/animations.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Hoorberry India - Luxury Cosmetics & Premium Clothing",
  description:
    "Discover luxury cosmetics and premium clothing that embody elegance and sophistication. Hoorberry India brings you curated collections that celebrate your unique style and beauty.",
  keywords:
    "Hoorberry India, luxury cosmetics, premium clothing, beauty, fashion, elegance, sophistication, makeup, skincare, designer clothing",
  authors: [{ name: "Hoorberry India" }],
  creator: "Hoorberry India",
  publisher: "Hoorberry India",
  robots: "index, follow",
  metadataBase: new URL('https://hoorberryindia.com'),
  alternates: {
    canonical: 'https://hoorberryindia.com',
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Hoorberry India - Luxury Cosmetics & Premium Clothing",
    description:
      "Discover luxury cosmetics and premium clothing that embody elegance and sophistication. Hoorberry India brings you curated collections that celebrate your unique style and beauty.",
    url: "https://hoorberryindia.com",
    siteName: "Hoorberry India",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hoorberry India - Luxury Beauty & Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoorberry India - Luxury Cosmetics & Premium Clothing",
    description:
      "Discover luxury cosmetics and premium clothing that embody elegance and sophistication.",
    images: ["/og-image.jpg"],
    creator: "@hoorberryindia",
  },
  verification: {
    google: "google-site-verification=aQ1KKyKqvCYzd643oksCf4ciK9l63_rp9PcULZ3JoJ4",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${openSans.variable} font-sans antialiased bg-black text-white`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
