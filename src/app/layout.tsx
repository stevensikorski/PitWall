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
      <body className={`bg-neutral-950 ${GeistSans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
