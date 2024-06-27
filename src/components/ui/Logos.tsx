import Image from "next/image";

export const PitWallLogo = () => {
  return <Image src="/flag.svg" alt="Checkered Flag" className="size-10" width={128} height={128} />;
};

export const PitWallLogoSmall = () => {
  return <Image src="/flag.svg" alt="Image" height={128} width={128} className="size-5 ml-2" />;
};

export const PitWallLogoLarge = () => {
  return <Image src="/flag.svg" alt="Checkered Flag" className="size-16" width={128} height={128} />;
};
