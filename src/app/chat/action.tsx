"use server";

import { generateObject } from "ai";
import { createAI, getMutableAIState, streamUI } from "ai/rsc";
import { openai } from "@ai-sdk/openai";
import { nanoid } from "nanoid";
import { ReactNode } from "react";
import { z } from "zod";

import { MarkdownText } from "@/components/layout/markdown";
import { LoadingComponent, ErrorComponent, WeatherComponent, RadioComponent, RaceControlComponent, SessionComponent } from "@/app/chat/components";
import { driverSchema, sessionSchema, weatherSchema } from "@/app/chat/schema";
import { system_message } from "@/constants/prompts";
import { fetchDriverData } from "@/utils/driver";
import { fetchWeatherData } from "@/utils/weather";
import { fetchDriverRadio } from "@/utils/radio";
import { fetchRaceControlData } from "@/utils/racecontrol";
import { fetchPositionData, fetchSessionData, fetchSessionKey } from "@/utils/session";

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
        weather_conditions: {
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
        driver_radio: {
          description: "Retrieve the team radio audio of the latest session only if asked. Do not assume or recommend it. If a driver is not mentioned, ask a clarifying question.",
          parameters: z.object({
            driver_details: z.string().describe("Details about a certain driver"),
          }),
          generate: async function* ({ driver_details }) {
            yield <LoadingComponent />;
            try {
              const data = await fetchDriverData("latest");
              const driver = await generateObject({
                model: openai("gpt-4o-mini"),
                schema: driverSchema,
                prompt: `Find the driver based on the given information: ${driver_details}. List: ${JSON.stringify(data)}`,
              });
              aiState.done((messages: ServerMessage[]) => [...messages, { role: "assistant", content: JSON.stringify(driver.object) }]);
              const info = await fetchDriverRadio(driver.object);

              if (info.radio.length === 0) {
                return <MarkdownText text={`There are no team radio's from ${info.name}.`} />;
              }

              return <RadioComponent info={info} />;
            } catch (error) {
              console.error(error);
              return <ErrorComponent />;
            }
          },
        },
        race_control: {
          description: "Retrieve the race control transcript of the latest session only if asked. Do not assume or recommend it.",
          parameters: z.object({}),
          generate: async function* () {
            yield <LoadingComponent />;
            try {
              const data = await fetchRaceControlData();
              const session = await fetchSessionData("latest");
              const info = await generateObject({
                model: openai("gpt-4o-mini"),
                schema: sessionSchema,
                prompt: `Please interpet the following data: ${JSON.stringify(session)}`,
              });
              aiState.done((messages: ServerMessage[]) => [...messages, { role: "assistant", content: JSON.stringify(info.object) }]);

              return <RaceControlComponent info={info.object} messages={data} />;
            } catch (error) {
              console.error(error);
              return <ErrorComponent />;
            }
          },
        },
        session_order: {
          description: "Retrieve the driver order of a session specified by the user only if asked. If a user asks about pole position or podium, you may provide full session details. Do not assume or recommend it.",
          parameters: z.object({
            session_name: z.string().describe("The session order asked about, these are the only options: Practice 1, Practice 2, Practice 3, Sprint Qualifying, Sprint, Qualifying, Race."),
          }),
          generate: async function* ({ session_name }) {
            yield <LoadingComponent />;
            try {
              const key = await fetchSessionKey(session_name);
              const session = await fetchSessionData(key);
              const positions = await fetchPositionData(key);
              const info = await generateObject({
                model: openai("gpt-4o-mini"),
                schema: sessionSchema,
                prompt: `Please interpet the following data: ${JSON.stringify(session)}`,
              });

              aiState.done((messages: ServerMessage[]) => [...messages, { role: "assistant", content: JSON.stringify(info.object) }]);
              if (Object.keys(session).length === 0) {
                return <MarkdownText text={`${session_name} has not occurred. Please ask about another session.`} />;
              }

              return <SessionComponent info={info.object} positions={positions} session={session_name} session_id={key} />;
            } catch (error) {
              console.error(error);
              return <ErrorComponent />;
            }
          },
        },
        // next:
        // race control
        // finishing/current session order
        // race podium
        //
        // ideas:
        // fastest lap (get session id from weekend)
        // session status (red flags? check race control basically for flag param)
        // compare lap times between 2 222drivers
        // stint monitor
        // strategy review (if race, check pit stop laps, and what compound/stint)
        //
        // challenging ideas:
        // schedule (https://api.openf1.org/v1/sessions?meeting_key=latest, might be past sessions only)
        // next race info (probably hard code weekends and their session start times)
        //
        // bad ideas:
        // track map
        // driver / constructors standings
        // list of winners or podium for all meetings/grandprix
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
