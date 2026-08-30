import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";

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
  openGraph: {
    title: "Core King Ply | Premium Calibrated Plywood",
    description:
      "Premium plywood solutions for furniture, interiors, and construction built with strength, precision, and trust.",
    url: "https://corekingply.com",
    siteName: "Core King Ply",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='16' fill='%231b1b1a'/><text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' fill='%23f4efe4' font-family='Arial' font-size='26' font-weight='700'>CK</text></svg>" />
      </head>
      <body>
        <CustomCursor />
        <Header />
        <main className="page-shell">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
