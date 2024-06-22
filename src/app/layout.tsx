import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";

export { metadata } from "@/lib/metadata";
export { viewport } from "@/lib/viewport";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}
