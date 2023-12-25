import React from "react";
import { Movie } from "../../types";
import styles from "./MovieList.module.css";

interface MoviesListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MoviesListProps) => {
  return (
    <div className={styles.movie_cart}>
      {movies.map((movie: Movie) => (
        <div className={styles.movie_container} key={movie.id}>
          <div className={styles.movie_title}>{movie.title}</div>
          <div className={styles.movie_year}>{movie.year}</div>
          <div className={styles.movie_description}>{movie.description}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
