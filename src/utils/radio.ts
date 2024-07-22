import axios from "axios";
import { fetchSessionData } from "@/utils/session";

export const fetchRadioData = async (number: number) => {
  try {
    const response = await axios.get(`https://api.openf1.org/v1/team_radio?session_key=latest&driver_number=${number}`);
    const radioResponse = await response.data;

    const data = radioResponse.map((radio: any) => ({
      date: radio.date,
      url: radio.recording_url,
    }));

    return data;
  } catch (error) {
    console.error(`Error fetching driver: ${error}`);
    throw error;
  }
};

export const fetchDriverRadio = async (driver: any) => {
  try {
    const session = await fetchSessionData("latest");

    const info = {
      name: driver.object.name,
      number: driver.object.number,
      flag: driver.object.flag,
      team_name: driver.object.team_name,
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
