"use client";
import { nanoid } from "nanoid";
import { ClientMessage } from "@/app/chat/action";
import { PitWallLogoLarge } from "@/components/ui/logos";
import { PanelButton } from "@/components/ui/buttons";

type PanelProperties = {
  setConversation: any;
  continueConversation: (input: string) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

export const Panel = ({ setConversation, continueConversation, loading, setLoading }: PanelProperties) => {
  const sendMessage = async (text: string) => {
    if (loading) return;
    setLoading(true);
    setConversation((currentConversation: ClientMessage[]) => [...currentConversation, { id: nanoid(), role: "user", display: text }]);
    const message = await continueConversation(text);
    setConversation((currentConversation: ClientMessage[]) => [...currentConversation, message]);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <PitWallLogoLarge />
      <div className="mt-8 grid grid-cols-2 tablet:grid-cols-4 gap-2 tablet:gap-4">
        <PanelButton onClick={() => sendMessage("Who is currently leading the constructors championship?")} question="Who is currently leading the constructors championship?" />
        <PanelButton onClick={() => sendMessage("What is the next upcoming GRAND PRIX?")} question="What is the next upcoming GRAND PRIX?" />
        <PanelButton onClick={() => sendMessage("What was the finishing order of the AUSTRIAN GRAND PRIX?")} question="What was the finishing order of the AUSTRIAN GRAND PRIX?" />
        <PanelButton onClick={() => sendMessage("Who is the most famous FORMULA 1 driver?")} question="Who is the most famous FORMULA 1 driver?" />
      </div>
    </div>
  );
};
