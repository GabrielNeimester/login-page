import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Arôme",
  description: "Online candle shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}>
        <Providers>
          <NavBar/>
          <main className="min-h-screen max-w-screen">
          {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
