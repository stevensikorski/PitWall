import React, { useState, FormEvent } from "react";
import { nanoid } from "nanoid";
import { NewChatButton, SubmitButton } from "@/components/ui/buttons";
import { warning, characters } from "@/constants/constants";
import { useActions, useUIState } from "ai/rsc";

interface ClientMessage {
  id: string;
  role: string;
  display: string;
}

interface InputProperties {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const Input = ({ loading, setLoading }: InputProperties) => {
  const [input, setInput] = useState<string>("");
  const [conversation, setConversation] = useUIState();
  const { continueConversation } = useActions();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (input.trim() === "" || loading) return;
    setInput("");
    setLoading(true);
    setConversation((currentConversation: ClientMessage[]) => [...currentConversation, { id: nanoid(), role: "user", display: input }]);
    const message = await continueConversation(input);
    setConversation((currentConversation: ClientMessage[]) => [...currentConversation, message]);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="h-24 tablet:h-20 w-full p-2 bg-gradient-to-b from-black to-neutral-950 border-t tablet:border border-neutral-800 tablet:rounded-lg mx-auto tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
      <div className="h-10 flex justify-center items-center">
        <NewChatButton />
        <div className="relative flex-grow">
          <input
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            maxLength={characters}
            placeholder="Ask the PitWall..."
            className="h-10 w-full p-2 pl-3 pr-16 overflow-hidden outline-none text-sm rounded bg-neutral-950 text-neutral-400 placeholder-neutral-700 border border-neutral-800"
          />
          <div className="absolute top-0 right-0 h-10 flex items-center pr-3 text-xs text-neutral-700">
            {input.length}/{characters}
          </div>
        </div>
        <SubmitButton loading={loading} />
      </div>
      <p className="mt-1.5 text-xs text-center text-neutral-700">{warning}</p>
    </form>
  );
};
