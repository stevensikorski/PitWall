import { ReactNode } from "react";
import { IoSunny, IoRainy } from "react-icons/io5";
import { polarToCartesian, describeArc, clamping } from "@/utils/gauge";

type GaugeProperties = {
  value: number | ReactNode;
  max: number;
  weather: boolean;
  unit: string | "";
  name: string;
  label: ReactNode | string;
};

export const Gauge = ({ value, max, weather, unit, name, label }: GaugeProperties) => {
  const startAngle = -140;
  const endAngle = 140;
  const size = 96;
  const strokeWidth = 8;

  let dot = polarToCartesian(0, 0, 0, 0);
  if (typeof value === "number") {
    dot = polarToCartesian(size / 2, size / 2, size / 2 - strokeWidth / 2, clamping(value, startAngle, endAngle, max));
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-neutral-600 text-xs text-center font-medium mb-2">{name}</p>
      <div className="size-24 relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none" className="absolute">
          <path d={describeArc(size / 2, size / 2, size / 2 - strokeWidth / 2, startAngle, endAngle)} strokeWidth={strokeWidth} stroke="#A3A3A3" strokeLinecap="round" />
          {max !== -1 && typeof value === "number" && <circle cx={dot.x} cy={dot.y} z="10" r="6" stroke="black" strokeWidth="4" />}
        </svg>
        <div className="size-full flex flex-col justify-center items-center">
          <div>
            {!weather && <p className="text-3xl text-neutral-400 font-semibold text-center leading-none tracking-tighter m-0">{value}</p>}
            <p className="text-xs text-neutral-400 font-medium text-center leading-none tracking-tighter  m-0">{unit}</p>
            {weather ? value === 0 ? <IoSunny className="size-12 text-neutral-400" /> : <IoRainy className="size-12 text-neutral-400" /> : null}
          </div>
          <div className="absolute size-full flex justify-center items-end">
            <p className="text-base font-semibold leading-none">{label}</p>
            {label === "" && label}
          </div>
        </div>
      </div>
    </div>
  );
};
