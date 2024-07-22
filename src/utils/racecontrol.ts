import axios from "axios";
import { fetchSessionData } from "@/utils/session";
import { getLocalTime } from "@/utils/utils";

export const fetchRaceControlData = async () => {
  try {
    const raceControlResponse = await axios.get(`https://api.openf1.org/v1/race_control?session_key=latest`);
    const raceControlData = raceControlResponse.data;

    const sessionData = await fetchSessionData("latest");

    const data = raceControlData.map((message: any) => ({
      date: message.date,
      lap_number: message.lap_number,
      driver_number: message.driver_number,
      message: message.message,
      category: message.category,
      flag: message.flag,
      sector: message.sector,
      scope: message.scope,
    }));

    return data;
  } catch (error) {
    console.error(`Error fetching weather: ${error}`);
    throw error;
  }
};
