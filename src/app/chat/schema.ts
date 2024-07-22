import { DeepPartial } from "ai";
import { z } from "zod";

export const weatherSchema = z.object({
  date: z.string().describe("Day of the Week, Month DD, YYYY @ HH:MM (TIMEZONE)"),
  title: z.string().describe("Please format as: [year] [session_name] ([session_type]) at [circuit]"),
  country: z.string().describe("The country code without any modifications."),
  rainfall: z.number().describe("Whether there is rainfall, a value of 0 or 1."),
  rain_risk: z.number().describe("The risk of rain. Provide it as an integer."),
  air_tempature: z.number().describe("Air temperature. Provide it as an integer with no decimals."),
  track_tempature: z.number().describe("Track temperature. Provide it as an integer with no decimals."),
  wind_direction: z.number().describe("Wind direction, from 0 to 359. Provide it as an integer with three digits."),
  wind_speed: z.number().describe("Wind speed. Provide it with one decimal."),
  humidity: z.number().describe("Relative humidity. Provide it as an integer with no decimals."),
  pressure: z.number().describe("Air pressure. Provide it as an integer with no decimals."),
});

export const driverSchema = z.object({
  name: z.string().describe("First and last name."),
  acronym: z.string().describe("The driver's acronym."),
  number: z.number().describe("The driver's car number."),
  country: z.string().describe("The driver's country without any modifications."),
  team_name: z.string().describe("The driver's team name."),
  team_color: z.string().describe("Hexadecimal color value."),
});

export const raceControlSchema = z.object({
  date: z.string().describe("Day of the Week, Month DD, YYYY @ HH:MM (TIMEZONE)"),
  timezone: z.string().describe("The timezone abbreviation without any modifications."),
  title: z.string().describe("Please format as: [year] [session_name] ([session_type]) at [circuit]"),
  country: z.string().describe("The country code without any modifications."),
  location: z.string().describe("The location."),
});

export type Weather = DeepPartial<typeof weatherSchema>;
export type Driver = DeepPartial<typeof driverSchema>;
