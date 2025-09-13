import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EnhancedStructuredData from "@/components/EnhancedStructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Seerah - Learn Prophet Muhammad's Life Story",
  description: "Free Seerah course online. Learn about Prophet Muhammad ﷺ with simple lessons, stories, and timeline. Start learning today!",
  keywords: "easy seerah, easyseerah, seerah, sirah, free seerah course, learn seerah online free, seerah online, prophet muhammad biography, simple seerah alternative, seerah for kids, seerah stories, seerah lessons free, interactive seerah, seerah pdf, seerah timeline, islamic history online",
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
    google: 'YOUR-VERIFICATION-CODE', // Get this from Google Search Console
    // bing: 'YOUR-BING-CODE', // Optional: Get from Bing Webmaster Tools
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
        <EnhancedStructuredData type="homepage" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
