import { ReactNode } from "react";
import { MdHeadsetMic } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RxLapTimer } from "react-icons/rx";
import { FaFlagCheckered, FaTrophy } from "react-icons/fa";
import { SiFerrari } from "react-icons/si";

export const title = "PitWall";
export const description = "PitWall is an AI application driving real-time updates and insights for the latest FORMULA 1 session through an interactive chatbot that redefines the spectator experience.";
export const motto = "AI driven FORMULA 1 insights and live timing updates";
export const warning = "PitWall is in early development. You may run into issues or mistakes.";
export const error = "An error has occurred. Please try again later.";
export const copyright = "Steven Sikorski © 2024";
export const disclaimer = "This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V.";
export const url = "https://pitwall.stevensikorski.com";
export const creator = "Steven Sikorski";
export const portfolio_url = "https://stevensikorski.com";
export const linkedin_url = "https://linkedin.com/in/stevensikorski";
export const github_url = "https://github.com/stevensikorski";
export const xtwitter_url = "/";
export const buymeacoffee_url = "/";
export const characters = 128;
export const panel: { question: string; icon: ReactNode }[] = [
  {
    question: "What are the current weather and track conditions?",
    icon: <TiWeatherPartlySunny className="size-5 mr-3 text-neutral-700 desktop:group-hover:text-neutral-400 transition duration-200" />,
  },
  {
    question: "What did Charles Leclerc say over the radio?",
    icon: <MdHeadsetMic className="size-5 mr-3 text-neutral-700 desktop:group-hover:text-neutral-400  transition duration-200" />,
  },
  {
    question: "What's the latest news from race control?",
    icon: <FaFlagCheckered className="size-5 mr-3 text-neutral-700 desktop:group-hover:text-neutral-400  transition duration-200 " />,
  },
  {
    question: "Who was on the podium of the race?",
    icon: <FaTrophy className="size-5 mr-3 text-neutral-700 desktop:group-hover:text-neutral-400  transition duration-200" />,
  },
  {
    question: "Who took pole position in qualifying?",
    icon: <RxLapTimer className="size-5 mr-3 text-neutral-700 desktop:group-hover:text-neutral-400  transition duration-200" />,
  },
  {
    question: "Who is the most successful FORMULA 1 team?",
    icon: <SiFerrari className="size-5 mr-3 text-neutral-700 desktop:group-hover:text-neutral-400  transition duration-200" />,
  },
];
