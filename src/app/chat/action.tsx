"use server";

import { createAI, getMutableAIState, streamUI } from "ai/rsc";
import { openai } from "@ai-sdk/openai";
import { ReactNode } from "react";
import { z } from "zod";
import { nanoid } from "nanoid";
import { generateObject } from "ai";

import { MarkdownText } from "@/components/layout/markdown";
import { JokeComponent, LoadingComponent, WeatherComponent } from "@/app/chat/components";
import { jokeSchema, weatherSchema } from "@/app/chat/schema";

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
  const result = await streamUI({
    model: openai("gpt-3.5-turbo"),
    messages: [...history.get(), { role: "user", content: input }],
    text: ({ content, done }) => {
      if (done) {
        history.done((messages: ServerMessage[]) => [...messages, { role: "assistant", content }]);
      }

      return <MarkdownText text={content} />;
    },
    tools: {
      tellAJoke: {
        description: "Tell a joke only when asked.",
        parameters: z.object({
          location: z.string().describe("the users location"),
        }),
        generate: async function* ({ location }) {
          yield <LoadingComponent />;
          const joke = await generateObject({
            model: openai("gpt-3.5-turbo"),
            schema: jokeSchema,
            prompt: "Generate a joke that incorporates the following location: " + location,
          });
          return <JokeComponent joke={joke.object} />;
        },
      },
      get_weather: {
        description: "Provide the weather of a given location only when asked.",
        parameters: z.object({
          location: z.string().describe("the location provided by the user"),
        }),
        generate: async function* ({ location }) {
          yield <LoadingComponent />;
          const weather = await generateObject({
            model: openai("gpt-3.5-turbo"),
            schema: weatherSchema,
            prompt: "Find the current weather at the following location: " + location,
          });
          return <WeatherComponent weather={weather.object} />;
        },
      },
    },
  });

  return {
    id: nanoid(),
    role: "assistant",
    display: result.value,
  };
}

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});
