import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import data from "./data.json";
import { parseAndArrangeDays } from "./utils/parseAndArrangeDays";

test("renders day of a week", () => {
  render(<App />);
  const linkElement = screen.getByText(/Monday/i);
  expect(linkElement).toBeInTheDocument();
});

test("moves closing times to previus day", () => {
  const parsedDates = parseAndArrangeDays(data);
  render(<App />);

  parsedDates.forEach((item) => {
    const howManyTimes = item.times.length;
    expect(howManyTimes).toBeLessThan(3);
  });
});
