"use client";
import { useState } from "react";
import { useUIState } from "ai/rsc";
import { History } from "@/components/chat/history";
import { Input } from "@/components/chat/input";
import { Panel } from "@/components/chat/panel";
import { UserComponent, PitWallComponent } from "@/app/chat/components";
import { ClientMessage } from "@/app/chat/action";

export const Chat = () => {
  const [messages, setMessages] = useUIState();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <section>
      <History>
        {messages.length === 0 && <Panel loading={loading} setLoading={setLoading} />}
        {messages.map((message: ClientMessage) => (
          <div key={message.id}>{message.role === "user" ? <UserComponent display={message.display}></UserComponent> : <PitWallComponent display={message.display}></PitWallComponent>}</div>
        ))}
        {messages.length > 0 && <div className="h-2 desktop:h-6 flex-shrink-0" />}
      </History>
      <Input loading={loading} setLoading={setLoading} />
    </section>
  );
};
