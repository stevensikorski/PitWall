"use server";

import { generateObject } from "ai";
import { createAI, getMutableAIState, streamUI } from "ai/rsc";
import { openai } from "@ai-sdk/openai";
import { nanoid } from "nanoid";
import { ReactNode } from "react";
import { z } from "zod";

import { MarkdownText } from "@/components/layout/markdown";
import { LoadingComponent, ErrorComponent, WeatherComponent, RadioComponent } from "@/app/chat/components";
import { driverSchema, weatherSchema } from "@/app/chat/schema";
import { system_message } from "@/constants/prompts";
import { fetchWeatherData, fetchDriverData, fetchRadioData } from "@/utils/utils";

export interface ServerMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ClientMessage {
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
}

export async function submitUserMessage(input: string): Promise<ClientMessage> {
  "use server";

  const aiState = getMutableAIState();
  try {
    const recentMessages = aiState.get().slice(-5);
    const result = await streamUI({
      model: openai("gpt-4o-mini"),
      messages: [...recentMessages, { role: "user", content: input }],
      system: system_message,
      text: ({ content, done }) => {
        if (done) {
          aiState.done((messages: ServerMessage[]) => [...messages, { role: "assistant", content }]);
        }
        return <MarkdownText text={content} />;
      },
      tools: {
        latest_weather: {
          description: "Retrieve the latest weather information only if asked. Do not assume or recommend it.",
          parameters: z.object({}),
          generate: async function* () {
            yield <LoadingComponent />;
            try {
              const data = await fetchWeatherData();
              const weather = await generateObject({
                model: openai("gpt-4o-mini"),
                schema: weatherSchema,
                prompt: `Please interpet the following data: ${JSON.stringify(data)}`,
              });
              aiState.done((messages: ServerMessage[]) => [...messages, { role: "assistant", content: JSON.stringify(weather.object) }]);

              return <WeatherComponent weather={weather.object} />;
            } catch (error) {
              console.error(error);
              return <ErrorComponent />;
            }
          },
        },
        latest_radio: {
          description: "Retrieve the team radio audio of the latest session only if asked. Do not assume or recommend it.",
          parameters: z.object({
            driverName: z.string().describe("the driver's team radio to retrieve"),
          }),
          generate: async function* ({ driverName }) {
            yield <LoadingComponent />;
            try {
              const data = await fetchDriverData();
              const driver = await generateObject({
                model: openai("gpt-4o-mini"),
                schema: driverSchema,
                prompt: `Find the driver based on the given information: ${driverName}. List: ${JSON.stringify(data)}`,
              });
              aiState.done((messages: ServerMessage[]) => [...messages, { role: "assistant", content: JSON.stringify(driver.object) }]);

              const radio = await fetchRadioData(Number(driver.object.number));
              if (radio.length === 0) {
                return <MarkdownText text={`There are no team radio's from ${driverName}.`} />;
              }

              return <RadioComponent driver={driver.object} radio={radio} />;
            } catch (error) {
              console.error(error);
              return <ErrorComponent />;
            }
          },
        },
        // wip:
        //
        // ideas:
        // race control
        // fastest lap
        // who is on pole position
        // next race info
        // session status (red flags?)
        //
        // challenging ideas:
        // finishing order
        // standings
        // current session order
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
    submitUserMessage,
  },
  initialAIState: [],
  initialUIState: [],
});
