import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkHub",
  description: "LinkHub is a simple way of organizing and sharing your links with others.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="apple-touch-icon" href="/logos/icon-192x192.png"/>
      <meta name="theme-color" content="#042940"/>
    </head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}