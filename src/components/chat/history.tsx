export const History = ({ children }: any) => {
  return (
    <div className={"h-[calc(100dvh-10rem)] desktop:h-[calc(100dvh-11rem)] flex flex-col gap-4 p-4 desktop:p-0 desktop:pr-4 desktop:my-4 overflow-y-auto scrollbar"}>
      {children}
      <div className="h-16 flex-shrink-0" />
    </div>
  );
};
