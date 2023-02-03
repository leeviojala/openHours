import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { DayProperties, SortedDay } from "../models";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { DayItem } from "./DayItem";
import { parseAndArrangeDays } from "../utils/parseAndArrangeDays";

interface DisplayCardProps {
  days: DayProperties;
}

export const DisplayCard: React.FC<DisplayCardProps> = (props) => {
  const [sortedDays, setSortedDays] = React.useState<SortedDay[]>([]);

  useEffect(() => {
    setSortedDays(parseAndArrangeDays(props.days));
  }, [props.days]);

  return (
    <Card sx={{ width: "350px" }} elevation={3}>
      <CardContent>
        <CardHeader
          avatar={<AccessTimeIcon sx={{ color: "#A1A2A4" }}></AccessTimeIcon>}
          title={
            <Typography variant="h6" align="left">
              Opening hours
            </Typography>
          }
        ></CardHeader>
        <List>
          <Divider></Divider>
          {sortedDays &&
            sortedDays.map((day) => {
              return <DayItem day={day}></DayItem>;
            })}
        </List>
      </CardContent>
    </Card>
  );
};
