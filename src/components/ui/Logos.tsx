import Image from "next/image";

export const PitWallLogo = () => {
  return <Image src="/flag.svg" alt="Checkered Flag" className="size-10" width={128} height={128} />;
};

export const PitWallLogoLarge = () => {
  return <Image src="/flag.svg" alt="Checkered Flag" className="size-16" width={128} height={128} />;
};
