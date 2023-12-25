import { Movie } from "../../data/types";

export interface FilterProps {
  filteredMovies: (movies: Movie[]) => void;
}
