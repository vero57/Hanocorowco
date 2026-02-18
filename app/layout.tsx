import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hanocorowco - Crafting Digital Experiences",
  description: "We transform ideas into stunning digital realities. Premium design meets cutting-edge technology for brands that dare to stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body className={`${outfit.variable} h-full font-body antialiased`}>
        <div id="app-wrapper" className="w-full h-full overflow-auto animated-bg text-white">
          <CursorGlow />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}