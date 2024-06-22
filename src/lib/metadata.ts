import { Metadata } from "next";
import { title, description, url, creator, portfolio_url } from "@/constants/constants";

export const metadata: Metadata = {
  title: {
    template: `${title} - %s`,
    default: title,
  },
  description: description,
  metadataBase: new URL(url),
  creator: creator,
  publisher: creator,
  authors: [{ name: creator, url: portfolio_url }],
};
