import axios from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 2000;
  },
  retryCondition: (error) => {
    return !!error.response && error.response.status === 429;
  },
});

export const fetchRaceControlData = async () => {
  try {
    const raceControlResponse = await axios.get(`https://api.openf1.org/v1/race_control?session_key=latest`);
    const raceControlData = raceControlResponse.data;

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
