export interface OpeningHours {
  type: string;
  value: number;
}
export interface DayProperties {
  [key: string]: OpeningHours[];
}

export interface SortedDay {
  day: string;
  times: OpeningHours[];
  today: boolean;
}
