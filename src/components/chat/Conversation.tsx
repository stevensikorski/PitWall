export const Conversation = ({ children }: any) => {
  return <div className={"h-[calc(100dvh-9rem)] desktop:h-[calc(100dvh-11rem)] flex flex-col gap-4 p-4 desktop:p-0 desktop:my-4 overflow-y-auto scrollbar"}>{children}</div>;
};
