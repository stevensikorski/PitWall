import axios from "axios";
import { fetchSessionData } from "@/utils/session";
import { getLocalTime } from "@/utils/utils";

export const fetchWeatherData = async () => {
  try {
    const weatherResponse = await axios.get(`https://api.openf1.org/v1/weather?session_key=latest`);
    const weatherData = weatherResponse.data[weatherResponse.data.length - 1];

    const controlResponse = await axios.get(`https://api.openf1.org/v1/race_control?session_key=latest&category=Other`);
    const controlData = controlResponse.data.find((event: { message: string }) => event.message.toLowerCase().includes("rain")) || [{ message: "RISK OF RAIN FOR F1 SESSION IS 0%" }];

    const sessionData = await fetchSessionData("latest");

    const data = {
      date: getLocalTime(weatherData.date, sessionData?.location),
      timezone: sessionData?.timezone,
      session_name: sessionData?.session_name,
      session_type: sessionData?.session_type,
      circuit: sessionData?.circuit,
      location: sessionData?.location,
      flag: sessionData?.flag,
      rainfall: weatherData.rainfall,
      rain_risk: controlData.message,
      air_temperature: weatherData.air_temperature,
      track_temperature: weatherData.track_temperature,
      wind_direction: weatherData.wind_direction,
      wind_speed: weatherData.wind_speed,
      humidity: weatherData.humidity,
      pressure: weatherData.pressure,
    };

    return data;
  } catch (error) {
    console.error(`Error fetching weather: ${error}`);
    throw error;
  }
};
