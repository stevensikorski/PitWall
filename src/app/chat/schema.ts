import { DeepPartial } from "ai";
import { z } from "zod";

export const weatherSchema = z.object({
  date: z.string().describe("Please format the date and time: Day of the Week, Month DD, YYYY @ HH:MM AM/PM (TIMEZONE)"),
  information: z.string().describe("Please format as: [year] [session_name] ([session_type]) at [location]"),
  country: z.string().describe("Given a country name, format it based on ISO 3166-1 alpha 2."),
  rainfall: z.string().describe("Whether there is rainfall (boolean). Return the same boolean value of 0 or 1."),
  rain_risk: z.string().describe("The risk of rain. Provide it as an integer."),
  air_tempature: z.string().describe("Air temperature. Provide it as an integer with no decimals."),
  track_tempature: z.string().describe("Track temperature. Provide it as an integer with no decimals."),
  wind_direction: z.string().describe("Wind direction, from 0 to 359. Provide it as an integer with three digits."),
  wind_speed: z.string().describe("Wind speed. Include one decimal."),
  humidity: z.string().describe("Relative humidity. Provide it as an integer with no decimals."),
  pressure: z.string().describe("Air pressure. Provide it as an integer with no decimals."),
});

export type Weather = DeepPartial<typeof weatherSchema>;
