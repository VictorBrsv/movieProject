import movies from "../../../data/movies";
import { FilterProps } from "../filterProps";
import styles from "./Sort.module.css";

export const Sort = ({ filteredMovies }: FilterProps) => {
  const handleAscending = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const sortedMovie = [...movies].sort((a, b) => a.year - b.year);
    filteredMovies(sortedMovie);
  };

  const handleDescending = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const sortedMovie = [...movies].sort((a, b) => b.year - a.year);
    filteredMovies(sortedMovie);
  };

  return (
    <div className={styles.buttons}>
      <span>Sorting: </span>
      <button className={styles.ascending} onClick={handleAscending}>
        ascending
      </button>
      <button className={styles.descending} onClick={handleDescending}>
        descending
      </button>
    </div>
  );
};
