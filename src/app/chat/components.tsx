"use client";

import { ReactNode } from "react";
import { ReactCountryFlag } from "react-country-flag";
import { CgSpinner } from "react-icons/cg";
import { IoRainy } from "react-icons/io5";
import { MdAir } from "react-icons/md";
import { WiBarometer, WiHumidity } from "react-icons/wi";
import { FaArrowUpLong } from "react-icons/fa6";

import { AudioPlayer } from "@/components/ui/audio";
import { PitWallLogoSmall } from "@/components/ui/logos";
import { Gauge } from "@/components/ui/gauge";
import { convertISO3166, getLocalTime, getOfficialTeamName } from "@/utils/utils";
import { Driver, Weather } from "@/app/chat/schema";
import { title, error } from "@/constants/constants";

type MessageProperties = {
  display: ReactNode;
};

export const UserComponent = ({ display }: MessageProperties) => {
  return (
    <div className="flex flex-col justify-start items-end mt-4">
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
      <p className="text-red-300 flex-grow break-words overflow-hidden">{error}</p>
    </div>
  );
};

type WeatherProperties = {
  weather: Weather;
};

export const WeatherComponent = ({ weather }: { weather: Weather }) => {
  return (
    <div className="w-full mt-2">
      <div className="flex flex-nowrap items-center gap-2">
        <ReactCountryFlag countryCode={convertISO3166(weather.flag as string)} svg className="text-xs tablet:text-base" />
        <h4 className="font-bold text-neutral-400">{weather.title}</h4>
      </div>
      <p>{weather.date}</p>
      <div className="flex flex-wrap gap-4 mt-4">
        <Gauge name="Air Tempature" label={"°C"} unit={""} weather={false} value={Number(weather.air_tempature)} max={42.5} />
        <Gauge name="Track Tempature" label={"°C"} unit={""} weather={false} value={Number(weather.track_tempature)} max={42.5} />
        <Gauge name="Conditions" label={weather.rainfall ? "WET" : "DRY"} unit={""} weather={true} value={Number(weather.rainfall)} max={-1} />
        <Gauge name="Precipitation" label={<IoRainy className="size-4 text-neutral-400" />} unit={"%"} weather={false} value={weather.rain_risk} max={100} />
        <Gauge name="Humidity" label={<WiHumidity className="size-5 text-neutral-400" />} unit={"%"} weather={false} value={weather.humidity} max={100} />
        <Gauge name="Air Pressure" label={<WiBarometer className="size-5 text-neutral-400" />} unit={"hPa"} weather={false} value={weather.pressure} max={1025} />
        <Gauge name="Wind Speed" label={<MdAir className="size-4 text-neutral-400" />} unit={"m/s"} weather={false} value={weather.wind_speed} max={60} />
        <Gauge name="Wind Direction" label={weather.wind_direction + "°"} unit={""} weather={false} value={<FaArrowUpLong className="size-12 text-neutral-400 transform" style={{ transform: `rotate(${weather.wind_direction}deg)` }} />} max={-1} />
      </div>
    </div>
  );
};

type AudioProperties = {
  date: string;
  url: string;
};

export const RadioComponent = ({ info }: { info: any }) => {
  return (
    <div className="w-full mt-2">
      <div className="flex flex-nowrap items-center gap-2">
        <ReactCountryFlag countryCode={convertISO3166(info.flag as string)} svg className="text-xs tablet:text-base" />
        <h4 className="font-bold text-neutral-400">{info.name}&apos;s Team Radio</h4>
      </div>
      <p>
        {getOfficialTeamName(info.team_name)} • #{info.number}
      </p>
      <div className="h-auto max-h-[128px] w-full mt-4 overflow-y-auto scroll-smooth scrollbar relative">
        {info.radio
          .slice()
          .reverse()
          .map((audio: AudioProperties, index: number) => (
            <AudioPlayer key={index} date={getLocalTime(audio.date, info.location)} timezone={info.timezone} url={audio.url} />
          ))}
      </div>
    </div>
  );
};
