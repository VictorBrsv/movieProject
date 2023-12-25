import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList/MovieList";
import Filter from "./components/Filter/Filter";
import movies from "./data/movies";
import { Movie } from "./data/types";
import { Background } from "./components/Background/Background";
import styles from "./App.module.css";

function App() {
  const [value, setValue] = useState<Movie[]>(movies);
  const [nextMovieIndex, setNextMovieIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextMovieIndex < value.length) {
        setNextMovieIndex(nextMovieIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [value, nextMovieIndex]);

  return (
    <Background>
      <div className={styles.app}>
        <div className={styles.filter}>
          <Filter filteredMovies={setValue} />
        </div>
        <hr />
        <div className={styles.list}>
          <MovieList movies={value.slice(0, nextMovieIndex)} />
        </div>
      </div>
    </Background>
  );
}

export default App;
