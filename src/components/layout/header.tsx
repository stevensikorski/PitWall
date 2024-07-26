import Link from "next/link";
import { PitWallLogo } from "@/components/ui/logos";
import { Navbar } from "@/components/layout/navbar";
import { ChatButton, InfoButton } from "@/components/ui/buttons";
import { title } from "@/constants/constants";

export const Header = () => {
  return (
    <header className="h-16 desktop:h-12 w-screen z-50 top-0 fixed bg-gradient-to-b from-neutral-950 to-black border-b border-neutral-800">
      <Navbar>
        <Link href={"/"} className="flex items-center mx-4 desktop:mx-0 gap-4">
          <PitWallLogo />
          <h1 className="text-xl font-semibold uppercase pitwall">{title}</h1>
        </Link>
        <div className="flex">
          <ChatButton />
          <InfoButton />
        </div>
      </Navbar>
    </header>
  );
};
