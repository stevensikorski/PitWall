import { DeepPartial } from "ai";
import { z } from "zod";

export const weatherSchema = z.object({
  date: z.string().describe("Day of the Week, Month DD, YYYY @ HH:MM AM/PM [convert to local time in location] (TIMEZONE [return an abbreviation for the current timezone in location)"),
  information: z.string().describe("Please format as: [year] [session_name] ([session_type]) at [location]"),
  country: z.string().describe("The country code without any modifications."),
  rainfall: z.string().describe("Whether there is rainfall, a value of 0 or 1."),
  rain_risk: z.string().describe("The risk of rain. Provide it as an integer."),
  air_tempature: z.string().describe("Air temperature. Provide it as an integer with no decimals."),
  track_tempature: z.string().describe("Track temperature. Provide it as an integer with no decimals."),
  wind_direction: z.string().describe("Wind direction, from 0 to 359. Provide it as an integer with three digits."),
  wind_speed: z.string().describe("Wind speed. Provide it with one decimal."),
  humidity: z.string().describe("Relative humidity. Provide it as an integer with no decimals."),
  pressure: z.string().describe("Air pressure. Provide it as an integer with no decimals."),
});

export const driverSchema = z.object({
  first_name: z.string().describe("The driver's first name."),
  last_name: z.string().describe("The driver's last name."),
  acronym: z.string().describe("The driver's acronym."),
  number: z.string().describe("The driver's car number."),
  country: z.string().describe("The country code without any modifications."),
  team_name: z.string().describe("The driver's team name."),
});

export type Weather = DeepPartial<typeof weatherSchema>;
export type Driver = DeepPartial<typeof driverSchema>;
