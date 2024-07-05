import { PitWallLogoLarge } from "@/components/ui/logos";
import { PanelButton } from "@/components/ui/buttons";

export const Panel = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <PitWallLogoLarge />
      <div className="mt-8 grid grid-cols-2 desktop:grid-cols-4 gap-4">
        <PanelButton />
        <PanelButton />
        <PanelButton />
        <PanelButton />
      </div>
    </div>
  );
};
