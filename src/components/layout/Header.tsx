import Link from "next/link";
import { PitWallLogo } from "@/components/ui/Logos";
import { Navbar } from "@/components/layout/Navbar";
import { ChatButton, HelpButton } from "@/components/ui/Buttons";

export const Header = () => {
  return (
    <header className="h-16 desktop:h-12 w-screen top-0 fixed bg-neutral-950 darkmode border-b border-neutral-800">
      <Navbar>
        <Link href={"/"} className="flex items-center mx-4 desktop:mx-0 gap-4">
          <PitWallLogo />
          <h1 className="text-lg font-semibold uppercase pitwall">PitWall</h1>
        </Link>
        <div className="flex">
          <ChatButton />
          <HelpButton />
        </div>
      </Navbar>
    </header>
  );
};
