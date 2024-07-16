import { DeepPartial } from "ai";
import { z } from "zod";

export const weatherSchema = z.object({
  date: z.string().describe("Please format the date and time: Day of the Week, Month DD, YYYY"),
  information: z.string().describe("Please format as: [year] [session_name] ([session_type]) at [location]"),
  country: z.string().describe("Given a country name, format it based on ISO 3166-1 alpha 2."),
  rainfall: z.string().describe("Whether there is rainfall. Classify as: WET or DRY."),
  rain_risk: z.string().describe("The percentage risk of rain occuring during a session."),
  air_tempature: z.string().describe("Air temperature (°C). Include one decimal and units."),
  track_tempature: z.string().describe("Track temperature (°C). Include one decimal and units."),
  wind_direction: z.string().describe("Wind direction, from 0 to 359. Provide it as an integer only."),
  wind_speed: z.string().describe("Wind speed (m/s). Include units."),
  humidity: z.string().describe("Relative humidity (%). Include units."),
  pressure: z.string().describe("Air pressure (mbar). Include units."),
});

export type Weather = DeepPartial<typeof weatherSchema>;
