import axios from "axios";
import { fetchSessionData } from "@/utils/session";

let cache: any = {};

export const fetchRadioData = async (number: number) => {
  try {
    const response = await axios.get(`https://api.openf1.org/v1/team_radio?session_key=latest&driver_number=${number}`);
    const radioResponse = await response.data;

    const data = radioResponse.map((radio: any) => ({
      date: radio.date,
      url: radio.recording_url,
    }));

    cache = data;

    return data;
  } catch (error) {
    console.error(`Error fetching driver: ${error}`);
    return cache;
  }
};

export const fetchDriverRadio = async (driver: any) => {
  try {
    const session = await fetchSessionData();

    const info = {
      name: driver.object.name,
      acronym: driver.object.acronym,
      number: driver.object.number,
      flag: driver.object.flag,
      team_name: driver.object.team_name,
      team_color: driver.object.team_color,
      location: session?.location,
      timezone: session?.timezone,
      radio: await fetchRadioData(driver.object.number),
    };

    return info;
  } catch (error) {
    console.error(`Error fetching driver: ${error}`);
    throw error;
  }
};
