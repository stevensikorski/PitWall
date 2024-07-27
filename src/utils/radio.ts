import axios from "axios";
import axiosRetry from "axios-retry";
import { fetchSessionData } from "@/utils/session";

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 2000;
  },
  retryCondition: (error) => {
    return !!error.response && error.response.status === 429;
  },
});

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
    console.error(`Error fetching radio data: ${error}`);
    throw error;
  }
};

export const fetchDriverRadio = async (driver: any) => {
  try {
    const session = await fetchSessionData("latest");

    const info = {
      name: driver.name,
      number: driver.number,
      country: driver.country,
      team_name: driver.team_name,
      location: session.location,
      timezone: session.timezone,
      radio: await fetchRadioData(driver.number),
    };

    return info;
  } catch (error) {
    console.error(`Error fetching driver radio: ${error}`);
    throw error;
  }
};
