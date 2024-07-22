import { nanoid } from "nanoid";
import { ClientMessage } from "@/app/chat/action";
import { PitWallLogoLarge } from "@/components/ui/logos";
import { PanelButton } from "@/components/ui/buttons";
import { panel } from "@/constants/constants";
import { useActions, useUIState } from "ai/rsc";

type PanelProperties = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

export const Panel = ({ loading, setLoading }: PanelProperties) => {
  const [messages, setMessages] = useUIState();
  const { submitUserMessage } = useActions();

  const sendMessage = async (text: string) => {
    if (loading) return;
    setLoading(true);
    setMessages((currentMessages: ClientMessage[]) => [...currentMessages, { id: nanoid(), role: "user", display: text }]);
    const message = await submitUserMessage(text);
    setMessages((currentMessages: ClientMessage[]) => [...currentMessages, message]);
    setLoading(false);
  };

  return (
    <div className="h-[calc(100dvh-10rem)] desktop:h-[calc(100dvh-11rem)] w-full flex flex-col justify-center items-center">
      <div className="w-full tablet:w-[512px] h-auto p-0 tablet:p-4 flex flex-col items-center tablet:bg-gradient-to-b from-neutral-950 to-black rounded-lg tablet:border border-neutral-800">
        <PitWallLogoLarge />
        <div className="w-full mt-4 gap-2 flex flex-col">
          {panel.map((item, index) => (
            <PanelButton key={index} question={item.question} icon={item.icon} onClick={() => sendMessage(item.question)} />
          ))}
        </div>
      </div>
    </div>
  );
};
