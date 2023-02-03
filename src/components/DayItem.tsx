import { ListItem, Typography } from "@mui/material";
import React from "react";
import { OpeningHours, SortedDay } from "../models";

interface DayItemProps {
  day: SortedDay;
}

export const DayItem: React.FC<DayItemProps> = (props) => {
  const loopTimes = (times: OpeningHours[]): string[] => {
    const looped = times.reduce((acc, cur, i, arr) => {
      const [hours] = new Date(cur.value * 1000)
        .toLocaleTimeString("en-US", {
          hour: "2-digit",
          hour12: true,
        })
        .split(":");

      acc.push((i % 2 !== 0 && `${acc[i - 1]} - ${hours}`) || `${hours}`);
      if (i % 2 !== 0) {
        delete acc[i - 1];
      }
      return acc;
    }, [] as string[]);
    return looped;
  };

  return (
    <ListItem disableGutters divider sx={{ justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1">{props.day.day}</Typography>
        {props.day.today && (
          <Typography variant="today" sx={{ marginLeft: "8px" }}>
            Today
          </Typography>
        )}
      </div>

      {props.day.times.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {loopTimes(props.day.times).map((time) => {
            return (
              <Typography variant="subtitle1" sx={{ marginLeft: "8px" }}>
                {time}
              </Typography>
            );
          })}
        </div>
      ) : (
        <Typography variant="closed">Closed</Typography>
      )}
    </ListItem>
  );
};
