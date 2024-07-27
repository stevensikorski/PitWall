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

export const fetchDriverData = async (session: string) => {
  try {
    const response = await axios.get(`https://api.openf1.org/v1/drivers?session_key=${session}`);
    const driverData = await response.data;

    const data = driverData.map((driver: any) => ({
      first_name: driver.first_name,
      last_name: driver.last_name,
      acronym: driver.name_acronym,
      number: driver.driver_number,
      country: driver.country_code,
      team_name: driver.team_name,
      team_color: driver.team_colour,
    }));

    return data;
  } catch (error) {
    console.error(`Error fetching driver: ${error}`);
    throw error;
  }
};
