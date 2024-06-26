"use client";
import { usePathname } from "next/navigation";
import { LinkedIn, GitHub, XTwitter, Instagram, BuyMeACoffee } from "@/components/ui/Buttons";

export const Footer = () => {
  const path = usePathname();
  if (path === "/chat") {
    return null;
  }

  return (
    <footer className="py-4 px-4 desktop:px-0 mb-32 mx-auto tablet:max-w-screen-tablet desktop:max-w-screen-desktop border-t border-neutral-800">
      <div className="mb-4 flex justify-between items-center">
        <p className="text-sm text-neutral-700 text-justify">Steven Sikorski © 2024</p>
        <div className="flex">
          <LinkedIn />
          <GitHub />
          <XTwitter />
          <Instagram />
          <BuyMeACoffee />
        </div>
      </div>
      <p className="text-sm text-neutral-700 text-justify">This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V.</p>
    </footer>
  );
};
