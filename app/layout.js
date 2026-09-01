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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
