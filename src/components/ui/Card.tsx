type CardProps = {
  title: string;
  text: string;
};

export const Card = ({ title, text }: CardProps) => {
  return (
    <div className="h-auto w-full p-4 bg-gradient-to-b from-neutral-950 to-black rounded-lg border border-neutral-800 overflow-hidden box-border">
      <h3>{title}</h3>
      <p className="mt-4 h-[calc(100%-3rem)] text-justify overflow-hidden text-clip">{text}</p>
    </div>
  );
};
