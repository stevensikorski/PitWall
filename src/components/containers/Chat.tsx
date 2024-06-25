import { Message } from "@/components/forms/Message";
import { Panel } from "@/components/layout/Panel";

export const Chat = ({ children }: any) => {
  return (
    <main className="h-chat w-full mt-16 desktop:mt-12 mx-auto tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
      <ul className="p-4 h-chat w-full overflow-y-auto">
        <Panel />
        {children}
      </ul>
      <Message />
    </main>
  );
};
