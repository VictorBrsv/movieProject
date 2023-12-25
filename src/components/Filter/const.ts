import movies from "../../movies";
import { Years } from "../../types";

export const years = Array.from(new Set(movies.map((movie) => movie.year))).map(
  (year) => ({
    value: year,
    label: year.toString(),
  })
);

export const sortedYears = (years: Years[]) =>
  years.sort((a, b) => a.value - b.value);
