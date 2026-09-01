import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://corekingply.com"),
  title: {
    default: "Core King Ply | Premium Calibrated Plywood",
    template: "%s | Core King Ply",
  },
  description:
    "Core King Ply manufactures premium calibrated plywood for furniture, interiors, commercial projects, and construction with strength, precision, and lasting durability.",
  keywords: [
    "plywood",
    "calibrated plywood",
    "BWR plywood",
    "BWP plywood",
    "plywood manufacturer",
    "furniture plywood",
    "interior plywood",
    "commercial plywood",
    "Core King Ply",
  ],
  icons: {
    icon: [
      { url: '/images/LOGO.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/images/LOGO.svg',
    apple: '/images/LOGO.svg',
  },
  openGraph: {
    title: "Core King Ply | Premium Calibrated Plywood",
    description:
      "Premium plywood solutions for furniture, interiors, and construction built with strength, precision, and trust.",
    url: "https://corekingply.com",
    siteName: "Core King Ply",
    images: [
      "/images/01.jpg",
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-YTBXV8ZB7B";

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/images/LOGO.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/images/LOGO.svg" />
        <link rel="apple-touch-icon" href="/images/LOGO.svg" />
      </head>
      <body>
        <Header />
        <main className="page-shell">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
