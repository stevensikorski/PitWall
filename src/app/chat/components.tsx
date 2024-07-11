import { ReactNode } from "react";
import { Joke, Weather } from "@/app/chat/schema";
import { title } from "@/constants/constants";
import { PitWallLogoSmall } from "@/components/ui/logos";
import { VscLoading } from "react-icons/vsc";

type MessageProperties = {
  display: ReactNode;
};

export const UserComponent = ({ display }: MessageProperties) => {
  return (
    <div className="flex justify-end items-start">
      <div className="p-2 px-3 flex max-w-[80%] desktop:max-w-[65%] bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800">
        <p className="flex-grow break-words overflow-hidden">{display}</p>
      </div>
    </div>
  );
};

export const PitWallComponent = ({ display }: MessageProperties) => {
  return (
    <div className="flex flex-col">
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
    <div className="flex flex-col">
      <div className="flex w-full pt-2">
        <VscLoading className="animate-spin text-neutral-400" size={16} />
      </div>
    </div>
  );
};

export const JokeComponent = ({ joke }: { joke?: Joke }) => {
  return (
    <div>
      <p className="bg-red-300">{joke?.setup}</p>
      <p className="bg-blue-300">{joke?.punchline}</p>
    </div>
  );
};

export const WeatherComponent = ({ weather }: { weather?: Weather }) => {
  return (
    <div>
      <p className="bg-red-300">{weather?.date}</p>
      <p className="bg-blue-300">{weather?.tempature}</p>
      <p className="bg-green-300">{weather?.rain}</p>
      <p className="bg-red-300">{weather?.humidity}</p>
      <p className="bg-blue-300">{weather?.wind}</p>
    </div>
  );
};
