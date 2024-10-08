import { ReactNode } from "react";
import Link from "next/link";
import { CgSpinner } from "react-icons/cg";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { RiChat4Fill, RiChatNewFill } from "react-icons/ri";
import { GrReturn } from "react-icons/gr";
import { SiBuymeacoffee } from "react-icons/si";
import { BsInfoLg } from "react-icons/bs";
import { linkedin_url, github_url, buymeacoffee_url, xtwitter_url, portfolio_url } from "@/constants/constants";
import { BiSolidChevronRight } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { PiAppWindowFill } from "react-icons/pi";

export const ChatButton = () => {
  return (
    <Link href={"/chat"} className="size-10 desktop:size-8 mr-3 desktop:mr-2 bg-black desktop:hover:bg-white rounded border border-neutral-800 flex justify-center items-center transition duration-200 group">
      <RiChat4Fill className="size-5 text-neutral-400 desktop:group-hover:text-neutral-950 transition duration-200" />
    </Link>
  );
};

export const InfoButton = () => {
  return (
    <Link href={"/info"} className="size-10 desktop:size-8 mr-3 desktop:mr-0 bg-black desktop:hover:bg-white rounded border border-neutral-800 flex justify-center items-center transition duration-200 group">
      <BsInfoLg className="size-5 text-neutral-400 desktop:group-hover:text-neutral-950 transition duration-200" />
    </Link>
  );
};

export const NewChatButton = () => {
  return (
    <a href={"/chat"} className="size-10 min-w-10 mr-2 bg-black desktop:hover:bg-white rounded border border-neutral-800 flex justify-center items-center transition duration-200 group">
      <RiChatNewFill className="size-6 text-neutral-400 desktop:group-hover:text-neutral-950 transition duration-200" />
    </a>
  );
};

export const SubmitButton = ({ loading }: { loading: boolean }) => {
  return (
    <button disabled={loading} className={`size-10 min-w-10 ml-2 bg-black rounded border border-neutral-800 flex justify-center items-center transition duration-200 relative group ${loading ? "bg-white pointer-events-none" : "desktop:hover:bg-white"}`}>
      <div className={`transition-opacity duration-200 ${loading ? "opacity-0" : "opacity-100"}`}>
        <GrReturn className="size-6 text-neutral-400 desktop:group-hover:text-neutral-950 transition-colors duration-200" />
      </div>
      <div className={`absolute transition-opacity duration-200 ${loading ? "opacity-100" : "opacity-0"}`}>
        <CgSpinner className="animate-spin text-neutral-950" size={24} />
      </div>
    </button>
  );
};

export const Portfolio = () => {
  return (
    <Link href={portfolio_url} target="_blank" className="ml-4 relative flex items-center justify-center group">
      <PiAppWindowFill className="size-4 desktop:size-5 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />
      <p className="w-max mb-2 px-2 py-0.5 bottom-full text-center rounded absolute pointer-events-none hidden desktop:flex bg-gradient-to-b from-neutral-950 to-black border border-neutral-800 opacity-0 desktop:group-hover:opacity-100 transition duration-200">Portfolio</p>
    </Link>
  );
};

export const LinkedIn = () => {
  return (
    <Link href={linkedin_url} target="_blank" className="ml-4 relative flex items-center justify-center group">
      <FaLinkedin className="size-4 desktop:size-5 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />
      <p className="w-max mb-2 px-2 py-0.5 bottom-full text-center rounded absolute pointer-events-none hidden desktop:flex bg-gradient-to-b from-neutral-950 to-black border border-neutral-800 opacity-0 desktop:group-hover:opacity-100 transition duration-200">LinkedIn</p>
    </Link>
  );
};

export const GitHub = () => {
  return (
    <Link href={github_url} target="_blank" className="ml-4 relative flex items-center justify-center group">
      <FaGithub className="size-4 desktop:size-5 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />
      <p className="w-max mb-2 px-2 py-0.5 bottom-full text-center rounded absolute pointer-events-none hidden desktop:flex bg-gradient-to-b from-neutral-950 to-black border border-neutral-800 opacity-0 desktop:group-hover:opacity-100 transition duration-200">GitHub</p>
    </Link>
  );
};

export const XTwitter = () => {
  return (
    <Link href={xtwitter_url} target="_blank" className="ml-4 relative flex items-center justify-center group">
      <FaXTwitter className="size-4 desktop:size-5 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />
      <p className="w-max mb-2 px-2 py-0.5 bottom-full text-center rounded absolute pointer-events-none hidden desktop:flex bg-gradient-to-b from-neutral-950 to-black border border-neutral-800 opacity-0 desktop:group-hover:opacity-100 transition duration-200">X</p>
    </Link>
  );
};

export const BuyMeACoffee = () => {
  return (
    <Link href={buymeacoffee_url} target="_blank" className="ml-4 relative flex items-center justify-center group">
      <SiBuymeacoffee className="size-4 desktop:size-5 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />
      <p className="w-max mb-2 px-2 py-0.5 bottom-full text-center rounded absolute pointer-events-none hidden desktop:flex bg-gradient-to-b from-neutral-950 to-black border border-neutral-800 opacity-0 desktop:group-hover:opacity-100 transition duration-200">Buy Me a Coffee</p>
    </Link>
  );
};

type PanelButtonProperties = {
  question: string;
  icon: ReactNode;
  onClick: () => void;
};

export const PanelButton = ({ question, icon, onClick }: PanelButtonProperties) => {
  return (
    <button onClick={onClick} className="py-2 px-3 flex justify-between items-center bg-gradient-to-b from-neutral-950 to-black rounded-lg border border-neutral-800 group">
      {icon}
      <p className="h-full w-full tracking-tight tablet:tracking-normal text-left font-medium flex items-center text-neutral-700 desktop:group-hover:text-neutral-400 transition-colors duration-200">{question}</p>
      <IoIosArrowForward className="size-5 ml-3 hidden tablet:flex text-neutral-700 desktop:group-hover:text-neutral-400 transition-colors duration-200" />
    </button>
  );
};
