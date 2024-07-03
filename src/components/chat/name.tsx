import { PitWallLogoSmall } from "@/components/ui/Logos";
import { title } from "@/constants/constants";

export const Name = () => {
  return (
    <div className="flex gap-2">
      <PitWallLogoSmall />
      <p className="h-4 desktop:h-5 text-center font-semibold text-white uppercase pitwall">{title}</p>
    </div>
  );
};
