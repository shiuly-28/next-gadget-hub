import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // সঠিক ইমপোর্ট
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const roboto = Roboto({
  weight: ['400', '500', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Next Gadget Hub",
  description: "Using Next.js, TypeScript and Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        <Navbar />
        <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}