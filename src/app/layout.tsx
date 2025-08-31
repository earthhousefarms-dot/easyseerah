import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Seerah - Complete Seerah of Prophet Muhammad ﷺ | Learn Seerah Online",
  description: "Learn Seerah - The complete biography and life story of Prophet Muhammad ﷺ. Interactive Seerah lessons, authentic hadith, timeline, Sahaba stories, and comprehensive Islamic history resources for all ages.",
  keywords: "seerah, seerah of prophet muhammad, learn seerah, seerah online, prophet muhammad biography, sirah, islamic history, prophetic biography, seerah for kids, seerah stories, seerah lessons, hadith, sahaba, makkah period, madinah period, prophet life story",
  authors: [{ name: "Easy Seerah" }],
  metadataBase: new URL('https://easyseerah.com'),
  alternates: {
    canonical: 'https://easyseerah.com',
  },
  openGraph: {
    type: "website",
    url: "https://easyseerah.com",
    siteName: "Easy Seerah",
    title: "Easy Seerah - Complete Seerah of Prophet Muhammad ﷺ",
    description: "Learn Seerah online - The complete biography of Prophet Muhammad ﷺ with interactive lessons, authentic hadith, timeline, and Sahaba stories.",
    images: [{ 
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Easy Seerah - Learn the Biography of Prophet Muhammad"
    }],
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Seerah - Complete Seerah of Prophet Muhammad ﷺ",
    description: "Learn Seerah online - The complete biography of Prophet Muhammad ﷺ with interactive lessons and authentic resources.",
    images: ["/og-image.png"],
    creator: "@easyseerah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
