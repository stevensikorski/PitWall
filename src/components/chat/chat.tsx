"use client";
import { useChat } from "ai/react";
import { History } from "@/components/chat/history";

import { UserMessage, PitWallMessage, LoadingMessage, ErrorMessage } from "@/components/chat/message";
import { NewChatButton, SubmitButton } from "@/components/ui/buttons";
import { warning, characters } from "@/constants/constants";
import { EmptyScreen } from "@/components/chat/panel";
import { FormEvent } from "react";
export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      handleSubmit();
    }
  };

  return (
    <div>
      <History>
        {messages.length === 0 && <EmptyScreen />}
        {messages.map((message) => (message.role === "user" ? <UserMessage key={message.id} text={message.content} /> : <PitWallMessage key={message.id} text={message.content} />))}
      </History>
      <form onSubmit={sendMessage} className="h-24 desktop:h-20 w-full p-2 bg-gradient-to-b from-black to-neutral-950 border-t desktop:border border-neutral-800 desktop:rounded-lg mx-auto tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
        <div className="h-10 flex justify-center items-center">
          <NewChatButton />
          <div className="relative flex-grow">
            <input value={input} onChange={handleInputChange} maxLength={characters} placeholder="Ask the PitWall..." className="h-10 w-full p-2 pl-3 pr-16 overflow-hidden outline-none text-sm rounded bg-neutral-950 text-neutral-400 placeholder-neutral-700 border border-neutral-800" />
            <div className="absolute top-0 right-0 h-10 flex items-center pr-3 text-xs text-neutral-700">
              {input.length}/{characters}
            </div>
          </div>
          <SubmitButton />
        </div>
        <p className="mt-1.5 text-xs text-center text-neutral-700">{warning}</p>
      </form>
    </div>
  );
};
