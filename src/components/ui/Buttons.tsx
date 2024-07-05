import Link from "next/link";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { RiChat4Fill, RiChatNewFill } from "react-icons/ri";
import { GrReturn } from "react-icons/gr";
import { SiBuymeacoffee } from "react-icons/si";
import { BsInfoLg } from "react-icons/bs";
import { MdOutlineQuestionMark } from "react-icons/md";
import { linkedin_url, github_url, buymeacoffee_url, xtwitter_url, instagram_url } from "@/constants/constants";

export const ChatButton = () => {
  return (
    <Link href={"/chat"} className="size-10 desktop:size-8 mr-3 desktop:mr-2 bg-neutral-950 desktop:hover:bg-white rounded border border-neutral-800 flex justify-center items-center transition duration-200 group">
      <RiChat4Fill className="size-5 text-neutral-400 desktop:group-hover:text-black transition duration-200" />
    </Link>
  );
};

export const HelpButton = () => {
  return (
    <Link href={"/help"} className="size-10 desktop:size-8 mr-3 desktop:mr-0 bg-neutral-950 desktop:hover:bg-white rounded border border-neutral-800 flex justify-center items-center transition duration-200 group">
      <BsInfoLg className="size-5 text-neutral-400 desktop:group-hover:text-black transition duration-200" />
    </Link>
  );
};

export const NewChatButton = () => {
  return (
    <a href={"/chat"} className="size-10 mr-2 bg-neutral-950 desktop:hover:bg-white rounded border border-neutral-800 flex justify-center items-center transition duration-200 group">
      <RiChatNewFill className="size-6 text-neutral-400 desktop:group-hover:text-black transition duration-200" />
    </a>
  );
};

export const SubmitButton = () => {
  return (
    <button className="size-10 ml-2 bg-neutral-950 desktop:hover:bg-white rounded border border-neutral-800 flex justify-center items-center transition duration-200 relative group">
      <GrReturn className="size-6 text-neutral-400 desktop:group-hover:text-black transition duration-200" />
    </button>
  );
};

export const LinkedIn = () => {
  return (
    <Link href={linkedin_url} target="_blank" className="ml-4 relative flex items-center justify-center group">
      <FaLinkedin className="size-4 desktop:size-5 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />
      <p className="w-max mb-2 px-2 py-0.5 bottom-full text-center rounded absolute pointer-events-none hidden desktop:flex bg-neutral-950 border border-neutral-800 opacity-0 desktop:group-hover:opacity-100 transition duration-200">LinkedIn</p>
    </Link>
  );
};

export const GitHub = () => {
  return (
    <Link href={github_url} target="_blank" className="ml-4 relative flex items-center justify-center group">
      <FaGithub className="size-4 desktop:size-5 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />
      <p className="w-max mb-2 px-2 py-0.5 bottom-full text-center rounded absolute pointer-events-none hidden desktop:flex bg-neutral-950 border border-neutral-800 opacity-0 desktop:group-hover:opacity-100 transition duration-200">GitHub</p>
    </Link>
  );
};

export const XTwitter = () => {
  return (
    <Link href={xtwitter_url} target="_blank" className="ml-4 relative flex items-center justify-center group">
      <FaXTwitter className="size-4 desktop:size-5 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />
      <p className="w-max mb-2 px-2 py-0.5 bottom-full text-center rounded absolute pointer-events-none hidden desktop:flex bg-neutral-950 border border-neutral-800 opacity-0 desktop:group-hover:opacity-100 transition duration-200">X</p>
    </Link>
  );
};

export const Instagram = () => {
  return (
    <Link href={instagram_url} target="_blank" className="ml-4 relative flex items-center justify-center group">
      <FaInstagram className="size-4 desktop:size-5 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />
      <p className="w-max mb-2 px-2 py-0.5 bottom-full text-center rounded absolute pointer-events-none hidden desktop:flex bg-neutral-950 border border-neutral-800 opacity-0 desktop:group-hover:opacity-100 transition duration-200">Instagram</p>
    </Link>
  );
};

export const BuyMeACoffee = () => {
  return (
    <Link href={buymeacoffee_url} target="_blank" className="ml-4 relative flex items-center justify-center group">
      <SiBuymeacoffee className="size-4 desktop:size-5 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />
      <p className="w-max mb-2 px-2 py-0.5 bottom-full text-center rounded absolute pointer-events-none hidden desktop:flex bg-neutral-950 border border-neutral-800 opacity-0 desktop:group-hover:opacity-100 transition duration-200">Buy Me a Coffee</p>
    </Link>
  );
};

export const PanelButton = () => {
  return (
    <button className="h-full w-full bg-neutral-950 rounded-lg border border-neutral-800 p-4 flex flex-col group">
      <MdOutlineQuestionMark className="size-5 mb-4 text-neutral-700 group-hover:text-neutral-400 transition duration-200 " />
      <p className="text-neutral-700 group-hover:text-neutral-400 transition duration-200 text-start">Who is currently leading the constructors championship?</p>
    </button>
  );
};
