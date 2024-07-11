import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

type MarkdownTextProperties = {
  text: string;
};

export const MarkdownText = ({ text }: MarkdownTextProperties) => {
  return (
    <Markdown remarkPlugins={[remarkGfm, remarkMath]} className="w-full markdown">
      {text}
    </Markdown>
  );
};
