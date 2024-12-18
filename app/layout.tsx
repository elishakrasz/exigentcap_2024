import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'

import "./globals.css";
import NavBar from "./components/NavBar";
const bodoni = localFont({ src: [
  { path: './fonts/bodoni/bodoni-book-bt.ttf', weight: '400', style: 'normal'},
  { path: './fonts/bodoni/BodoniBT-Bold.otf', weight: '700', style: 'normal'},
],
  variable: '--font-bodoni'
})
const lato = localFont({ src: [
  { path:'./fonts/lato/Lato-Black.ttf', weight:'500', style:'normal' },
  { path:'./fonts/lato/Lato-BlackItalic.ttf', weight:'500', style:'italic' },
  { path:'./fonts/lato/Lato-Bold.ttf', weight:'800', style:'normal' },
  { path:'./fonts/lato/Lato-Bold.ttf', weight:'800', style:'normal' },
  { path:'./fonts/lato/Lato-BoldItalic.ttf', weight:'800', style:'italic' },
  { path:'./fonts/lato/Lato-Italic.ttf', weight:'300', style:'italic' },
  { path:'./fonts/lato/Lato-Light.ttf', weight:'300', style:'normal' },
  { path:'./fonts/lato/Lato-Regular.ttf', weight:'400', style:'mormal' },
  { path:'./fonts/lato/Lato-Thin.ttf', weight:'100', style:'normal' },
  { path:'./fonts/lato/Lato-ThinItalic.ttf', weight:'100', style:'italic' }
], variable: '--font-lato'
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoni.variable} ${lato.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
