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
      <PitWallLogoLarge />
      <div className="mt-8 grid grid-cols-2 tablet:grid-cols-4 gap-2 tablet:gap-4">
        {panel.map((item) => (
          <PanelButton key={item.id} question={item.question} icon={item.icon} onClick={() => sendMessage(item.question)} />
        ))}
      </div>
    </div>
  );
};
