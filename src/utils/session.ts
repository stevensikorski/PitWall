import axios from "axios";
import { getTimezone, getLocalTime } from "@/utils/utils";

export const fetchSessionData = async (key: string) => {
  try {
    const sessionResponse = await axios.get(`https://api.openf1.org/v1/sessions?session_key=${key}`);
    const sessionData = sessionResponse.data[0];
    const meetingResponse = await axios.get(`https://api.openf1.org/v1/meetings?meeting_key=${sessionData.meeting_key}`);
    const meetingData = meetingResponse.data[0];

    const data = {
      official_name: meetingData.meeting_official_name,
      session_name: meetingData.meeting_name,
      session_type: sessionData.session_name,
      circuit: meetingData.circuit_short_name,
      location: meetingData.location,
      country: meetingData.country_code,
      date: getLocalTime(sessionData.date_start, meetingData.location),
      timezone: getTimezone(meetingData.location),
    };

    return data;
  } catch (error) {
    console.error(`Error fetching session: ${error}`);
    return [];
  }
};

export const fetchSessionKey = async (session: string) => {
  try {
    const sessionResponse = await axios.get(`https://api.openf1.org/v1/sessions?meeting_key=latest&session_name=${session}`);
    const sessionData = sessionResponse.data[0];
    if (sessionResponse.data.length === 0) {
      return -1;
    }

    return sessionData.session_key;

    // if (session !== "Latest") {
    //   const sessionResponse = await axios.get(`https://api.openf1.org/v1/sessions?meeting_key=latest&session_name=${session}`);
    //   const sessionData = sessionResponse.data[0];
    //   return sessionData.session_key;
    // } else {
    //   const sessionResponse = await axios.get(`https://api.openf1.org/v1/sessions?meeting_key=latest`);
    //   const sessionData = sessionResponse.data;
    //   return sessionData[sessionData.length - 1].session_key;
    // }
  } catch (error) {
    console.error(`Error fetching session key: ${error}`);
    throw error;
  }
};

export const fetchPositionData = async (key: string) => {
  try {
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

    const data = Object.keys(positions)
      .map((number) => ({
        position: positions[number].position,
        number: Number(number),
      }))
      .sort((a, b) => a.position - b.position);

    return data;
  } catch (error) {
    console.error(`Error fetching positions: ${error}`);
    throw error;
  }
};

export const fetchSessionFinish = async (key: string, session: string) => {
  try {
    const sessionResponse = await axios.get(`https://api.openf1.org/v1/race_control?session_key=${key}&flag=CHEQUERED`);
    const sessionData = sessionResponse.data;

    if (session === "Sprint Qualifying" || session === "Qualifying") {
      if (sessionData.length === 3) {
        return true;
      } else {
        return false;
      }
    }

    if (sessionData.length === 1) {
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fetching session finish: ${error}`);
    throw error;
  }
};
