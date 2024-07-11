import { GeistSans } from "geist/font/sans";

export { metadata } from "@/lib/metadata";
export { viewport } from "@/lib/viewport";

import "@/styles/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`background ${GeistSans.className}`}>
        <Header />
        {children}
        <Footer />
        <div className="absolute top-0 -z-50 h-screen w-screen bg-[radial-gradient(ellipse_100%_100%_at_50%_-0%,rgba(10,10,10,1),rgba(128,128,128,0))]"></div>
      </body>
    </html>
  );
}
