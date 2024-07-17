import axios from "axios";

export const fetchWeatherData = async () => {
  try {
    const weatherResponse = await axios.get(`https://api.openf1.org/v1/weather?session_key=latest`);
    const controlResponse = await axios.get(`https://api.openf1.org/v1/race_control?session_key=latest&category=Other`);
    const sessionResponse = await axios.get(`https://api.openf1.org/v1/sessions?session_key=latest`);
    const meetingResponse = await axios.get(`https://api.openf1.org/v1/meetings?meeting_key=${sessionResponse.data[0].meeting_key}`);

    const weatherData = weatherResponse.data[weatherResponse.data.length - 1];
    const controlData = controlResponse.data.find((event: { message: string }) => event.message.toLowerCase().includes("rain"));
    const sessionData = sessionResponse.data[0];
    const meetingData = meetingResponse.data[0];

    const data = {
      date: weatherData.date,
      session_name: meetingData.meeting_name,
      session_type: sessionData.session_name,
      location: sessionData.location,
      country: sessionData.country_name,
      rainfall: weatherData.rainfall,
      rain_risk: controlData.message || "RISK OF RAIN FOR F1 SESSION IS 0%",
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
