"use client";
import { ReactNode } from "react";
import { Weather } from "@/app/chat/schema";
import { errorMessage, title } from "@/constants/constants";
import { PitWallLogoSmall } from "@/components/ui/logos";
import { CgSpinner } from "react-icons/cg";
import { WiDirectionUp } from "react-icons/wi";
import { ReactCountryFlag } from "react-country-flag";

type MessageProperties = {
  display: ReactNode;
};

export const UserComponent = ({ display }: MessageProperties) => {
  return (
    <div className="flex flex-col justify-start items-end">
      <div className="p-2 px-3 z-10 flex max-w-[80%] desktop:max-w-[65%] bg-gradient-to-b from-neutral-950 to-black rounded-lg rounded-br-none border border-neutral-800">
        <p className="flex-grow break-words overflow-hidden">{display}</p>
      </div>
      <div className="flex">
        <div className="relative">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-l-8 border-transparent border-t-neutral-800"></div>
        </div>
      </div>
    </div>
  );
};

export const PitWallComponent = ({ display }: MessageProperties) => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex gap-2">
        <PitWallLogoSmall />
        <p className="h-4 desktop:h-5 text-center font-semibold text-white uppercase pitwall">{title}</p>
      </div>
      <div className="flex flex-col w-full">{display}</div>
    </div>
  );
};

export const LoadingComponent = () => {
  return (
    <div className="flex w-full pt-2">
      <CgSpinner className="animate-spin text-neutral-400 font-bold size-4 desktop:size-5" size={64} />
    </div>
  );
};

export const ErrorComponent = () => {
  return (
    <div className="flex w-full pt-2">
      <p className="text-red-300 flex-grow break-words overflow-hidden">{errorMessage}</p>
    </div>
  );
};
export const WeatherComponent = ({ weather }: { weather?: Weather }) => {
  return (
    <div className="flex w-full pt-2">
      <div className="h-auto w-full">
        <div className="flex items-center gap-2">
          <ReactCountryFlag title={weather?.country} countryCode={weather?.country || ""} svg />
          <h4>{weather?.information}</h4>
        </div>
        <h5>{weather?.date}</h5>
        <p>{weather?.rainfall}</p>
        <p>{weather?.rain_risk}</p>
        <p>{weather?.air_tempature}</p>
        <p>{weather?.track_tempature}</p>
        <div className="flex justify-start items-center gap-2">
          <p>{weather?.wind_speed}</p>
          <WiDirectionUp className="size-4 transform text-neutral-400" style={{ transform: `rotate(${weather?.wind_direction}deg)` }} />
        </div>
        <p>{weather?.humidity}</p>
        <p>{weather?.pressure}</p>
      </div>
    </div>
  );
};
