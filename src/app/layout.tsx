import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

import "@/styles/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export { metadata } from "@/lib/metadata";
export { viewport } from "@/lib/viewport";
export const dynamic = "force-dynamic";
export const maxDuration = 10;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-950 border-t border-neutral-800 background ${GeistSans.className}`}>
        <div className="absolute top-0 -z-50 pointer-events-none h-[100dvh] w-screen overflow-hidden bg-[radial-gradient(ellipse_300%_100%_at_50%_-0%,rgba(0,0,0,1),rgba(0,0,0,0))]"></div>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
