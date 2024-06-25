import { PitWallLogoLarge } from "@/components/ui/Logos";
import { PanelButton } from "@/components/ui/Buttons";

export const Panel = () => {
  return (
    <li className="h-full w-full flex flex-col justify-center items-center">
      <PitWallLogoLarge />
      <h3>Welcome to the PitWall</h3>
      <p>Your virtual race engineer.</p>
      <div className="mt-8">
        <PanelButton text="Who won the Spanish Grand Prix?" />
        <PanelButton text="Who is leading the drivers championship?" />
        <PanelButton text="Who is Scuderia Ferrari's biggest rival?" />
      </div>
    </li>
  );
};
