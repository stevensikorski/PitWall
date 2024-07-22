import axios from "axios";
import { getTimezone, getLocalTime } from "@/utils/utils";

export const fetchSessionData = async (key: string) => {
  try {
    const sessionResponse = await axios.get(`https://api.openf1.org/v1/sessions?session_key=${key}`);
    const sessionData = sessionResponse.data[0];
    const meetingResponse = await axios.get(`https://api.openf1.org/v1/meetings?meeting_key=${sessionData.meeting_key}`);
    const meetingData = meetingResponse.data[0];
    const positionResponse = await axios.get(`https://api.openf1.org/v1/position?session_key=${key}`);
    const positionData = positionResponse.data;

    const positions: any = {};
    positionData.forEach((driver: any) => {
      const number = driver.driver_number;
      const position = driver.position;
      const date = new Date(driver.date).getTime();

      if (!positions[number] || positions[number].date < date) {
        positions[number] = { position, date };
      }
    });

    const result = Object.keys(positions)
      .map((number) => ({
        position: positions[number].position,
        number: Number(number),
      }))
      .sort((a, b) => a.position - b.position);

    const data = {
      official_name: meetingData.meeting_official_name,
      session_name: meetingData.meeting_name,
      session_type: sessionData.session_name,
      circuit: meetingData.circuit_short_name,
      location: meetingData.location,
      country: meetingData.country_name,
      flag: meetingData.country_code,
      date: getLocalTime(meetingData.date_start, meetingData.location),
      timezone: getTimezone(meetingData.location),
      positions: result,
    };

    console.log(data);

    return data;
  } catch (error) {
    console.error(`Error fetching session: ${error}`);
    throw error;
  }
};
