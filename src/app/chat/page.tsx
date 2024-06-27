import { Metadata } from "next";
import { Chat } from "@/components/containers/Chat";
import { MessageBox } from "@/components/chat/MessageBox";
import { Conversation } from "@/components/chat/Conversation";
import { UserMessage, PitWallMessage } from "@/components/chat/Message";

export const metadata: Metadata = {
  title: "Chat",
};

export default function ChatPage() {
  return (
    <Chat>
      <Conversation>
        <UserMessage text="Who won the Grand Prix?" />
        <PitWallMessage text="Hey there!" />
        <UserMessage text="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW" />
        <PitWallMessage text="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW" />
        <UserMessage text="In the realm of Formula 1 engineering, how crucial is the integration of hybrid power units with the chassis design to optimize aerodynamic efficiency while maintaining thermal stability and weight distribution across various tracks?" />
        <PitWallMessage text="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW" />
        <UserMessage text="Who won the Grand Prix?" />
        <PitWallMessage text="Hey there!" />
        <UserMessage text="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW" />
        <PitWallMessage text="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW" />
        <UserMessage text="In the realm of Formula 1 engineering, how crucial is the integration of hybrid power units with the chassis design to optimize aerodynamic efficiency while maintaining thermal stability and weight distribution across various tracks?" />
        <PitWallMessage text="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW" />
      </Conversation>
      <MessageBox />
    </Chat>
  );
}
