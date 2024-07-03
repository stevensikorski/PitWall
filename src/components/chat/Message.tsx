import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaSpinner } from "react-icons/fa";
import { Name } from "@/components/chat/name";
import { error } from "@/constants/constants";

type MessageProps = {
  text: string;
};

export const UserMessage = ({ text }: MessageProps) => {
  if (text.trim() === "") {
    return null;
  }

  return (
    <div className="flex justify-end items-start">
      <div className="p-2 px-3 flex max-w-[80%] desktop:max-w-[65%] bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800">
        <p className="text-sm flex-grow break-words overflow-hidden">{text}</p>
      </div>
    </div>
  );
};

export const PitWallMessage = ({ text }: MessageProps) => {
  return (
    <div className="flex flex-col">
      <Name />
      <div className="pt-2 flex w-full">
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
      <Name />
      <div className="pt-2 flex w-full">
        <FaSpinner className="animate-spin text-neutral-400" size={16} />
      </div>
    </div>
  );
};

export const ErrorMessage = () => {
  return (
    <div className="flex flex-col">
      <Name />
      <div className="pt-2 flex w-full">
        <p className="text-sm text-red-300 flex-grow break-words overflow-hidden">{error}</p>
      </div>
    </div>
  );
};
