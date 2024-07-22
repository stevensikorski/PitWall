import axios from "axios";
import moment from "moment-timezone";

import { alpha3_alpha2, locationTimezoneMap, teamNameMap } from "@/utils/maps";

export const convertTime = (date: string): string => {
  let time = date.split("T")[1];
  time = time.split(".")[0];
  return time;
};

export const convertISO3166 = (alpha3: string): string => {
  const alpha2 = alpha3_alpha2[alpha3] as string;
  if (alpha2) {
    return alpha2;
  } else {
    return "";
  }
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

export const getOfficialTeamName = (team: string) => {
  return teamNameMap[team];
};
