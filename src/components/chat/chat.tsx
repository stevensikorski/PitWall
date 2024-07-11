"use client";
import { useState } from "react";
import { useActions, useUIState } from "ai/rsc";
import { History } from "@/components/chat/history";
import { Input } from "@/components/chat/input";
import { Panel } from "@/components/chat/panel";
import { UserComponent, PitWallComponent } from "@/app/chat/components";
import { ClientMessage } from "@/app/chat/action";

export const Chat = () => {
  const [input, setInput] = useState<string>("");
  const [conversation, setConversation] = useUIState();
  const { continueConversation } = useActions();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <History>
        {conversation.length === 0 && <Panel setConversation={setConversation} continueConversation={continueConversation} loading={loading} setLoading={setLoading} />}
        {conversation.map((message: ClientMessage) => (
          <div key={message.id}>{message.role === "user" ? <UserComponent display={message.display}></UserComponent> : <PitWallComponent display={message.display}></PitWallComponent>}</div>
        ))}
        {conversation.length > 0 && <div className="h-8 flex-shrink-0" />}
      </History>
      <Input input={input} setInput={setInput} setConversation={setConversation} continueConversation={continueConversation} loading={loading} setLoading={setLoading} />
    </div>
  );
};
