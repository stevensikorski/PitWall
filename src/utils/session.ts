import axios from "axios";
import { getTimezone, getLocalTime } from "@/utils/utils";

let cache: any = {};

export const fetchSessionData = async () => {
  try {
    const sessionResponse = await axios.get(`https://api.openf1.org/v1/sessions?session_key=latest`);
    const sessionData = sessionResponse.data[0];

    const meetingResponse = await axios.get(`https://api.openf1.org/v1/meetings?meeting_key=latest`);
    const meetingData = meetingResponse.data[0];

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
    };

    cache = data;

    return data;
  } catch (error) {
    console.error(`Error fetching session: ${error}`);
    return cache;
  }
};
