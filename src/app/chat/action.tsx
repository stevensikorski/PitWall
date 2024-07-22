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
import { fetchDriverData } from "@/utils/driver";
import { fetchWeatherData } from "@/utils/weather";
import { fetchDriverRadio, fetchRadioData } from "@/utils/radio";
import { fetchSessionData } from "@/utils/session";

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
          description: "Retrieve the latest weather information only if asked. Do not assume or recommend it. Do not ask for a location as it will be found in the data provided.",
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
            details: z.string().describe("details about a certain driver"),
          }),
          generate: async function* ({ details }) {
            yield <LoadingComponent />;
            try {
              const data = await fetchDriverData();
              const session = await fetchSessionData();
              const driver = await generateObject({
                model: openai("gpt-4o-mini"),
                schema: driverSchema,
                prompt: `Find the driver based on the given information: ${details}. List: ${JSON.stringify(data)}`,
              });
              const info = await fetchDriverRadio(driver);
              aiState.done((messages: ServerMessage[]) => [...messages, { role: "assistant", content: JSON.stringify(info) }]);

              if (info.radio.length === 0) {
                return <MarkdownText text={`There are no team radio's from ${info.name}.`} />;
              }

              console.log(info);

              return <RadioComponent info={info} />;
            } catch (error) {
              console.error(error);
              return <ErrorComponent />;
            }
          },
        },
        // next:
        // race control
        //
        // ideas:
        // session status (red flags?)
        // compare lap times between 2 drivers
        // stint monitor
        // who is on pole position
        // fastest lap
        //
        // challenging ideas:
        // schedule (https://api.openf1.org/v1/sessions?meeting_key=latest)
        // next race info
        // track map
        // list of winners or podium for all meetings/grandprix
        //
        // bad ideas:
        // standings
        // current session order
        // finishing/current session order
        // starting grid
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
