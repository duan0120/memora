import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Memora: Read It Later App for iOS & macOS with Offline Reading",
  description: "Memora is a secure read it later app for iOS and macOS. Save web pages offline, sync via iCloud, and enjoy distraction-free reading. Organize with tags and search easily.",
  openGraph: {
    title: "Memora: Read It Later App for iOS & macOS with Offline Reading",
    description: "Memora is a secure read it later app for iOS and macOS. Save web pages offline, sync via iCloud, and enjoy distraction-free reading. Organize with tags and search easily.",
    url: "https://www.memora.app",
    siteName: "Memora",
    images: [
      {
        url: "/imgs/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memora: Read It Later App for iOS & macOS with Offline Reading",
    description: "Memora is a thoughtfully designed 'Read It Later' app that helps you save, organize, and revisit your favorite articles and notes effortlessly.",
    images: ["/imgs/logo.png"],
    creator: "@duanhjlt",
    site: "@duanhjlt",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgs/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
