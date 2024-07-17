import { ReactNode } from "react";
import { MdOutlineQuestionMark } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";

export const title = "PitWall";
export const description = "PitWall is a GPT-powered application, providing spectators with motorsports data, including historical information and real-time updates across various racing series.";
export const motto = "AI driven motorsports data and updates";
export const warning = "PitWall is in early development and is prone to mistakes.";
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
export const cards: { title: string; text: string }[] = [
  {
    title: "Help Card 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit. Sit amet commodo nulla facilisi nullam. Ut enim blandit volutpat maecenas volutpat blandit. Amet facilisis magna etiam tempor orci eu lobortis elementum. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. A arcu cursus vitae congue mauris rhoncus aenean. Senectus et netus et malesuada fames ac. Urna nec tincidunt praesent semper feugiat nibh. Dui id ornare arcu odio. Magna eget est lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit. Sit amet commodo nulla facilisi nullam.",
  },
  {
    title: "Help Card 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit. Sit amet commodo nulla facilisi nullam. Ut enim blandit volutpat maecenas volutpat blandit. Amet facilisis magna etiam tempor orci eu lobortis elementum. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. A arcu cursus vitae congue mauris rhoncus aenean. Senectus et netus et malesuada fames ac. Urna nec tincidunt praesent semper feugiat nibh. Dui id ornare arcu odio. Magna eget est lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit. Sit amet commodo nulla facilisi nullam.",
  },
  {
    title: "Help Card 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Help Card 4",
    text: "",
  },
  {
    title: "Help Card 5",
    text: "",
  },
  {
    title: "Help Card 6",
    text: "",
  },
];
export const panel: { id: number; question: string; icon: ReactNode }[] = [
  {
    id: 1,
    question: "What are the current weather and track conditions?",
    icon: <TiWeatherPartlySunny className="size-5 mb-4 text-neutral-400 transition duration-200 " />,
  },
  {
    id: 2,
    question: "What is the next upcoming GRAND PRIX?",
    icon: <MdOutlineQuestionMark className="size-5 mb-4 text-neutral-400 transition duration-200 " />,
  },
  {
    id: 3,
    question: "What was the result of AUSTRIAN GRAND PRIX?",
    icon: <MdOutlineQuestionMark className="size-5 mb-4 text-neutral-400 transition duration-200 " />,
  },
  {
    id: 4,
    question: "Who is the most famous FORMULA 1 driver?",
    icon: <MdOutlineQuestionMark className="size-5 mb-4 text-neutral-400 transition duration-200 " />,
  },
];
