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
  title: "Memora - Your Ultimate Read It Later Solution",
  description: "Memora is a thoughtfully designed 'Read It Later' app that helps you save, organize, and revisit your favorite articles and notes effortlessly.",
  keywords:["Memora", "Read it later", "Notes", "AI", "Instapaper","Pocket","Readwise","Matter"],
  openGraph: {
    title: "Memora - Your Ultimate Read It Later Solution",
    description: "Memora is a thoughtfully designed 'Read It Later' app that helps you save, organize, and revisit your favorite articles and notes effortlessly.",
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
    title: "Memora - Your Ultimate Read It Later Solution",
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
