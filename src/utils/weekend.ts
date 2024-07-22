import axios from "axios";

export const fetchWeekendData = async () => {
  try {
    const meetingResponse = await axios.get(`https://api.openf1.org/v1/meetings?meeting_key=latest`);
    const meetingData = meetingResponse.data[0];

    const data = {};

    return data;
  } catch (error) {
    console.error(`Error fetching session: ${error}`);
    throw error;
  }
};
