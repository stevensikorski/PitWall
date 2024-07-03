export const Window = ({ children }: any) => {
  return <main className="h-full w-full mt-16 desktop:mt-12 mx-auto tablet:max-w-screen-tablet desktop:max-w-screen-desktop overflow-hidden">{children}</main>;
};
