"use client";
import { usePathname } from "next/navigation";
import { LinkedIn, GitHub, XTwitter, BuyMeACoffee } from "@/components/ui/buttons";
import { copyright, disclaimer } from "@/constants/constants";

export const Footer = () => {
  const path = usePathname();
  if (path === "/chat") {
    return null;
  }

  return (
    <footer className="py-4 px-4 desktop:px-0 mb-32 border-t border-neutral-800 mx-auto tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
      <div className="mb-4 flex justify-between items-center">
        <p className="text-sm text-neutral-700 text-justify">{copyright}</p>
        <div className="flex">
          <LinkedIn />
          <GitHub />
          <XTwitter />
          <BuyMeACoffee />
        </div>
      </div>
      <p className="text-sm text-neutral-700 text-justify">{disclaimer}</p>
    </footer>
  );
};
