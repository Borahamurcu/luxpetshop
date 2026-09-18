import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://yier.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YIER — Lüks Evcil Hayvan Ürünleri",
    template: "%s | YIER",
  },
  description:
    "YIER, evcil hayvanınız için deri ürünler, kaşmir ve el işçiliğiyle tamamlanmış mobilyalar sunan bir lüks marka — evinizin geri kalanıyla aynı standartlarda üretilir.",
  openGraph: {
    title: "YIER — Lüks Evcil Hayvan Ürünleri",
    description:
      "Deri ürünler, kaşmir ve el işçiliğiyle tamamlanmış mobilyalar — sahipleri kadar iyi yaşayan evcil hayvanlar için.",
    url: siteUrl,
    siteName: "YIER",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "YIER — Lüks Evcil Hayvan Ürünleri",
    description:
      "Deri ürünler, kaşmir ve el işçiliğiyle tamamlanmış mobilyalar — sahipleri kadar iyi yaşayan evcil hayvanlar için.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-charcoal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
