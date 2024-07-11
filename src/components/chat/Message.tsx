"use client";
import { FaSpinner } from "react-icons/fa";
import { Name } from "@/components/chat/name";
import { errorMessage } from "@/constants/constants";
import { MarkdownText } from "@/components/layout/markdown";

type MessageProperties = {
  text: string;
};

export const UserMessage = ({ text }: MessageProperties) => {
  return (
    <div className="flex justify-end items-start">
      <div className="p-2 px-3 flex max-w-[80%] desktop:max-w-[65%] bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800">
        <p className="flex-grow break-words overflow-hidden">{text}</p>
      </div>
    </div>
  );
};

export const PitWallMessage = ({ text }: MessageProperties) => {
  return (
    <div className="flex flex-col">
      <Name />
      <div className="flex flex-col w-full">
        <MarkdownText text={text} />
      </div>
    </div>
  );
};

type LoadingProperties = {
  loading: boolean;
};

export const LoadingMessage = ({ loading }: LoadingProperties) => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full">
        <FaSpinner className="animate-spin text-neutral-400" size={16} />
      </div>
    </div>
  );
};

export const ErrorMessage = () => {
  return (
    <div className="flex flex-col">
      <Name />
      <div className="flex w-full pt-2">
        <p className="text-sm text-red-300 flex-grow break-words overflow-hidden">{errorMessage}</p>
      </div>
    </div>
  );
};
