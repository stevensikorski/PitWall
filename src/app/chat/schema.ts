import { DeepPartial } from "ai";
import { z } from "zod";

export const jokeSchema = z.object({
  setup: z.string().describe("the setup of the joke"),
  punchline: z.string().describe("the punchline of the joke"),
});

export const weatherSchema = z.object({
  date: z.string().describe("the current date"),
  tempature: z.string().describe("the current tempature"),
  rain: z.string().describe("the probability of rain"),
  humidity: z.string().describe("the current humidity level"),
  wind: z.string().describe("the current windspeed and direction"),
});

export type Joke = DeepPartial<typeof jokeSchema>;
export type Weather = DeepPartial<typeof weatherSchema>;
