import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-ulu.com"),
  title: "AI-ULU | Kurumsal AI orkestrasyonu",
  description:
    "AI-ULU, kritik karar süreçleri için güvenilir yapay zeka altyapısı sunar; ölçeklenebilir platformumuz yatırımcılar için kanıtlanmış çekiş sağlar.",
  openGraph: {
    title: "AI-ULU | Kurumsal AI orkestrasyonu",
    description:
      "AI-ULU, kritik karar süreçleri için güvenilir yapay zeka altyapısı sunar; ölçeklenebilir platformumuz yatırımcılar için kanıtlanmış çekiş sağlar.",
    url: "https://ai-ulu.com",
    siteName: "AI-ULU",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI-ULU yatırımcı sunumu",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-ULU | Kurumsal AI orkestrasyonu",
    description:
      "Kurumsal yapay zekayı güvenli, izlenebilir ve hızlı şekilde devreye alın.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/ai-ulu-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
