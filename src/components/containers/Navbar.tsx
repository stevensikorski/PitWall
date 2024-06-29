export const Navbar = ({ children }: any) => {
  return <nav className="h-full flex justify-between items-center mx-auto tablet:max-w-screen-tablet desktop:max-w-screen-desktop">{children}</nav>;
};
