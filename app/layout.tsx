import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MenuBar from "./components/MenuBar";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react"

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
  title: "MoCo Recycling",
  description: "Information and Quiz on trash sorting in Montgomery County",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="-hKZs65iX_vQhMu0eYth1FkSI8S0w2Mcv1aqD4UIFaE" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-200`}
      >
        <MenuBar />
        <main className="container">
          {children}
        </main>
        <footer className="text-center text-black py-8 bg-gradient-to-r from-green-100 to-blue-200">
          <p>For Congressional App Challenge</p>
          <Link href={"/about"}><p className="text-blue-800 hover:underline cursor-pointer">See more about me here 🙋‍♂️</p></Link>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
