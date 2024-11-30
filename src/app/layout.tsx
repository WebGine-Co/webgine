import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "WebGine",
  description: "Le language du web ne ment pas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <body className='min-h-screen 2xl:mx-96 xl:mx-72 lg:mx-60 md:mx-36 sm:mx-20 mx-10 flex flex-col'>
        <Navbar />
        <main className="flex-1 flex">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
