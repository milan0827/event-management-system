import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import NavButton from "@/components/nav-button/NavButton";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | EMS",
    default: "EMS",
  },
  description: "This platform is all about Event Management System",
  metadataBase: new URL("https://www.google.com"), //Localhost in development
  openGraph: {
    url: "/",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-200 min-h-screen flex flex-col`}
      >
        <Navbar>
          <NavButton />
        </Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
