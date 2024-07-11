import { Metadata } from "next";
import { Window } from "@/components/layout/window";
import { Chat } from "@/components/chat/chat";
import { AI } from "@/app/chat/action";

export const metadata: Metadata = {
  title: "Chat",
};

export default function ChatPage() {
  return (
    <Window>
      <AI>
        <Chat />
      </AI>
    </Window>
  );
}
