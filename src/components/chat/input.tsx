"use client";
import { useState } from "react";
import { NewChatButton, SubmitButton } from "@/components/ui/buttons";
import { warning, characters } from "@/constants/constants";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: any) => {
    if (e.target.value.length <= characters) {
      setInputValue(e.target.value);
    } else {
      setInputValue(e.target.value.substring(0, characters));
    }
  };

  return (
    <form className="h-20 w-full p-2 bg-gradient-to-b from-neutral-900 to-neutral-950 border-t tablet:border border-neutral-800 tablet:rounded-lg mx-auto tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
      <div className="h-10 flex justify-center items-center">
        <NewChatButton />
        <div className="relative flex-grow">
          <input placeholder="Ask the PitWall..." className="h-10 w-full p-2 pl-3 pr-16 overflow-hidden outline-none text-sm rounded bg-neutral-950 text-neutral-400 placeholder-neutral-700 border border-neutral-800" onChange={handleChange} value={inputValue} />
          <div className="absolute top-0 right-0 h-10 flex items-center pr-3 text-xs text-neutral-700">
            {inputValue.length}/{characters}
          </div>
        </div>
        <SubmitButton />
      </div>
      <p className="mt-1.5 text-xs text-center text-neutral-700">{warning}</p>
    </form>
  );
};
