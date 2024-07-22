import axios from "axios";
import moment from "moment-timezone";

export const fetchWeatherData = async () => {
  try {
    const weatherResponse = await axios.get(`https://api.openf1.org/v1/weather?session_key=latest`);
    const controlResponse = await axios.get(`https://api.openf1.org/v1/race_control?session_key=latest&category=Other`);
    const sessionResponse = await axios.get(`https://api.openf1.org/v1/sessions?session_key=latest`);
    const meetingResponse = await axios.get(`https://api.openf1.org/v1/meetings?meeting_key=${sessionResponse.data[0].meeting_key}`);

    const weatherData = weatherResponse.data[weatherResponse.data.length - 1];
    const controlData = controlResponse.data.find((event: { message: string }) => event.message.toLowerCase().includes("rain")) || [{ message: "RISK OF RAIN FOR F1 SESSION IS 0%" }];
    const sessionData = sessionResponse.data[0];
    const meetingData = meetingResponse.data[0];

    const data = {
      date: weatherData.date,
      utc_offset: meetingData.gmt_offset,
      session_name: meetingData.meeting_name,
      session_type: sessionData.session_name,
      location: sessionData.location,
      country: sessionData.country_code,
      rainfall: weatherData.rainfall,
      rain_risk: controlData.message,
      air_temperature: weatherData.air_temperature,
      track_temperature: weatherData.track_temperature,
      wind_direction: weatherData.wind_direction,
      wind_speed: weatherData.wind_speed,
      humidity: weatherData.humidity,
      pressure: weatherData.pressure,
    };

    return data as any;
  } catch (error) {
    console.error(`Error fetching weather: ${error}`);
    throw error;
  }
};

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
    }));

    return data;
  } catch (error) {
    console.error(`Error fetching driver: ${error}`);
    throw error;
  }
};

export const fetchRadioData = async (driver_number: number) => {
  try {
    const response = await axios.get(`https://api.openf1.org/v1/team_radio?session_key=latest&driver_number=${driver_number}`);
    const radioResponse = await response.data;

    const data = radioResponse.map((radio: any) => ({
      date: radio.date,
      recording_url: radio.recording_url,
    }));

    return data;
  } catch (error) {
    console.error(`Error fetching driver: ${error}`);
    throw error;
  }
};

export const convertTime = (date: string): string => {
  let time = date.split("T")[1];
  time = time.split(".")[0];
  return time;
};

export const convertISO3166 = (alpha3: string): string => {
  const alpha3_alpha2: { [key: string]: string } = {
    ARG: "AR",
    AUS: "AU",
    AUT: "AT",
    AZE: "AZ",
    BRN: "BH",
    BEL: "BE",
    BRA: "BR",
    CAN: "CA",
    CHL: "CL",
    CHN: "CN",
    COL: "CO",
    CZE: "CZ",
    DEN: "DK",
    FIN: "FI",
    FRA: "FR",
    GER: "DE",
    HUN: "HU",
    IND: "IN",
    IDN: "ID",
    IRL: "IE",
    ISR: "IL",
    ITA: "IT",
    JPN: "JP",
    MYS: "MY",
    MEX: "MX",
    MON: "MC",
    MAR: "MA",
    NED: "NL",
    NZL: "NZ",
    POL: "PL",
    PRT: "PT",
    QAT: "QA",
    RUS: "RU",
    KSA: "SA",
    SGP: "SG",
    ZAF: "ZA",
    KOR: "KR",
    ESP: "ES",
    SWE: "SE",
    CHE: "CH",
    THA: "TH",
    TUR: "TR",
    UAE: "AE",
    GBR: "GB",
    USA: "US",
    URY: "UY",
    VNM: "VN",
  };

  const alpha2 = alpha3_alpha2[alpha3] as string;
  if (alpha2) {
    return alpha2;
  } else {
    return "";
  }
};

const locationTimezoneMap: { [key: string]: string } = {
  Sakhir: "Asia/Bahrain",
  Jeddah: "Asia/Riyadh",
  Melbourne: "Australia/Melbourne",
  Baku: "Asia/Baku",
  Miami: "America/New_York",
  Monaco: "Europe/Monaco",
  Barcelona: "Europe/Madrid",
  Montréal: "America/Toronto",
  Spielberg: "Europe/Vienna",
  Silverstone: "Europe/London",
  Budapest: "Europe/Budapest",
  "Spa-Francorchamps": "Europe/Brussels",
  Zandvoort: "Europe/Amsterdam",
  Monza: "Europe/Rome",
  "Marina Bay": "Asia/Singapore",
  Suzuka: "Asia/Tokyo",
  Lusail: "Asia/Qatar",
  Austin: "America/Chicago",
  "Mexico City": "America/Mexico_City",
  "São Paulo": "America/Sao_Paulo",
  "Las Vegas": "America/Los_Angeles",
  "Yas Island": "Asia/Dubai",
  Shanghai: "Asia/Shanghai",
  Imola: "Europe/Rome",
};

export const getTimezone = (location: string): string => {
  const map = locationTimezoneMap[location];
  const abbreviation = moment.tz(map).format("z");
  return abbreviation;
};

export const getLocalTime = (date: string, location: string): string => {
  const localDate = locationTimezoneMap[location];
  const formattedDate = moment.utc(date).tz(localDate).format("YYYY-MM-DDTHH:mm:ss");
  return formattedDate;
};
