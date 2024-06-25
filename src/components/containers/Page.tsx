import { Footer } from "@/components/layout/Footer";

export const Page = ({ children }: any) => {
  return (
    <main className="h-full w-full mt-16 desktop:mt-12 p-4 mx-auto tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
      {children}
      <Footer />
    </main>
  );
};
