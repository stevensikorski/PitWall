import { ReactNode } from "react";

type CardProps = {
  title: string;
  display: ReactNode;
};

export const Card = ({ title, display }: CardProps) => {
  return (
    <div className="h-auto w-full p-4 bg-gradient-to-b from-neutral-950 to-black rounded-lg border border-neutral-800 overflow-hidden box-border">
      <h3>{title}</h3>
      {display}
    </div>
  );
};
