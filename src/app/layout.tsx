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
  title: "EasySeerah - Learn About Prophet Muhammad's ﷺ Life Journey",
  description: "Explore the life journey of Prophet Muhammad ﷺ through an interactive timeline, stories, and educational resources. Perfect for children and adults alike.",
  keywords: "Seerah, Prophet Muhammad, Islamic History, Muslim Education, Islamic Learning",
  authors: [{ name: "EasySeerah" }],
  openGraph: {
    type: "website",
    url: "https://easyseerah.com/",
    title: "EasySeerah - Learn About Prophet Muhammad's ﷺ Life Journey",
    description: "Explore the life journey of Prophet Muhammad ﷺ through an interactive timeline, stories, and educational resources.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasySeerah - Learn About Prophet Muhammad's ﷺ Life Journey",
    description: "Explore the life journey of Prophet Muhammad ﷺ through an interactive timeline, stories, and educational resources.",
    images: ["/og-image.png"],
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
