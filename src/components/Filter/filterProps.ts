import { Movie } from "../../types";

export interface FilterProps {
  filteredMovies: (movies: Movie[]) => void;
}
