import { PitWallLogoSmall } from "@/components/ui/Logos";
import { title } from "@/constants/constants";
import { FaSpinner } from "react-icons/fa";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MessageProps = {
  text: string;
};

export const UserMessage = ({ text }: MessageProps) => {
  if (text.trim() === "") {
    return null;
  }

  return (
    <div className="flex justify-end items-start">
      <div className="p-2 flex max-w-[80%] desktop:max-w-[65%] bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800">
        <p className="text-sm px-1 flex-grow break-words overflow-hidden">{text}</p>
      </div>
    </div>
  );
};

export const PitWallMessage = ({ text }: MessageProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <PitWallLogoSmall />
        <p className="h-4 desktop:h-5 text-center font-semibold text-white uppercase pitwall">{title}</p>
      </div>
      <div className="py-2 flex w-full">
        <Markdown remarkPlugins={[remarkGfm]} className="text-sm w-full flex-grow break-words overflow-hidden markdown">
          {text}
        </Markdown>
      </div>
    </div>
  );
};

export const LoadingMessage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <PitWallLogoSmall />
        <p className="h-4 desktop:h-5 text-center font-semibold text-white uppercase pitwall">{title}</p>
      </div>
      <div className="py-2 flex w-full">
        <FaSpinner className="animate-spin text-neutral-400" size={16} />
      </div>
    </div>
  );
};
