import movies from "../../data/movies";
import { Years } from "../../data/types";

export const years = Array.from(new Set(movies.map((movie) => movie.year))).map(
  (year) => ({
    value: year,
    label: year.toString(),
  })
);

export const sortedYears = (years: Years[]) =>
  years.sort((a, b) => a.value - b.value);
