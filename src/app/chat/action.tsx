"use server";

import { generateObject } from "ai";
import { createAI, getMutableAIState, streamUI } from "ai/rsc";
import { openai } from "@ai-sdk/openai";
import { nanoid } from "nanoid";
import { ReactNode } from "react";
import { z } from "zod";

import { MarkdownText } from "@/components/layout/markdown";
import { LoadingComponent, ErrorComponent, WeatherComponent } from "@/app/chat/components";
import { weatherSchema } from "@/app/chat/schema";
import { system_message } from "@/constants/prompts";
import { fetchWeatherData } from "@/utils/utils";

export interface ServerMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ClientMessage {
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
}

export async function continueConversation(input: string): Promise<ClientMessage> {
  "use server";

  const history = getMutableAIState();
  try {
    const result = await streamUI({
      model: openai("gpt-3.5-turbo"),
      messages: [...history.get(), { role: "user", content: input }],
      system: system_message,
      text: ({ content, done }) => {
        if (done) {
          history.done((messages: ServerMessage[]) => [...messages, { role: "assistant", content }]);
        }
        return <MarkdownText text={content} />;
      },
      tools: {
        latest_weather: {
          description: "Retrieve weather information only if asked. Do not assume or recommend it.",
          parameters: z.object({}),
          generate: async function* () {
            yield <LoadingComponent />;
            try {
              const data = await fetchWeatherData();
              const weather = await generateObject({
                model: openai("gpt-3.5-turbo"),
                schema: weatherSchema,
                prompt: `Please provide the following weaather data only if asked. The data corresponds to the latest weather of the current/last session. Please interpet the following data: ${JSON.stringify(data)}`,
              });

              history.done((messages: ServerMessage[]) => [...messages, { role: "assistant", content: JSON.stringify(weather.object) }]);

              return <WeatherComponent weather={weather.object} />;
            } catch (error) {
              console.error(error);
              return <ErrorComponent />;
            }
          },
        },
      },
    });

    return {
      id: nanoid(),
      role: "assistant",
      display: result.value,
    };
  } catch (error) {
    console.error(error);
    return {
      id: nanoid(),
      role: "assistant",
      display: <ErrorComponent />,
    };
  }
}

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});
