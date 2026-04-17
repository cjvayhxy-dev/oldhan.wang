import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Press_Start_2P, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "oldhan.wang — 老韩的 AI 探索之旅",
    template: "%s | oldhan.wang",
  },
  description: "裸辞回成都，零基础转行AI，用AI做产品，记录一切探索的过程。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${pressStart.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-bg-main text-text-main">
        <Nav />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
