import axios from "axios";

export const fetchDriverData = async () => {
  try {
    const response = await axios.get(`https://api.openf1.org/v1/drivers?session_key=latest`);
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
