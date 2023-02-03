import { DayProperties } from "../models";

interface DaysOfWeek {
  [key: number]: string;
}

const daysOfWeek: DaysOfWeek = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

export const parseAndArrangeDays = (rawDays: DayProperties) => {
  const sortedDays = Object.entries(rawDays).map(([day, selectedDay]) => {
    return { day: day, times: selectedDay, today: false };
  });
  //move close time to previous day
  const parsed = sortedDays.map((day, i, arr) => {
    let toMove = null;
    if (day.times.length && day.times[0].type === "close") {
      toMove = day.times.shift();
    }

    if (toMove && i > 0) {
      arr[i - 1].times.push(toMove);
    }

    return day;
  });
  const dayOfWeek = new Date().getDay();
  //find and set value today true for current day
  const today = parsed.findIndex((day) => day.day === daysOfWeek[dayOfWeek]);
  parsed[today].today = true;

  return parsed;
};
