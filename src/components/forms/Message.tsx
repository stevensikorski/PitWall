"use client";

import { useState } from "react";
import { NewButton, SubmitButton } from "@/components/ui/Buttons";
import { maxCharacters } from "@/constants/constants";

export const Message = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: any) => {
    if (e.target.value.length <= maxCharacters) {
      setInputValue(e.target.value);
    } else {
      setInputValue(e.target.value.substring(0, maxCharacters));
    }
  };

  return (
    <form className="h-auto w-full p-2 desktop:my-4 fixed bottom-0 desktop:rounded-lg border-t desktop:border border-neutral-800 mx-auto tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
      <div className="flex justify-between items-center">
        <NewButton />
        <div className="relative flex-grow">
          <input placeholder="Message the PitWall..." className="h-10 w-full p-2 pl-3 pr-16 resize-none overflow-hidden outline-none text-sm rounded-lg bg-black text-neutral-400 placeholder-neutral-700 border border-neutral-800" value={inputValue} onChange={handleChange} />
          <div className="absolute top-0 right-0 h-10 flex items-center pr-3 text-xs text-neutral-700">
            {inputValue.length}/{maxCharacters}
          </div>
        </div>
        <SubmitButton />
      </div>
      <p className="text-xs text-neutral-700 mt-2 flex justify-center items-center">PitWall is prone to mistakes.</p>
    </form>
  );
};
