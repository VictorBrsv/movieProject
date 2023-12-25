import React, { useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import Filter from "./components/Filter/Filter";
import movies from "./movies";
import { Movie } from "./types";
import { Background } from "./components/Background/Background";
import styles from "./App.module.css";

function App() {
  const [value, setValue] = useState<Movie[]>(movies);

  return (
    <Background>
      <div className={styles.app}>
        <div className={styles.filter}>
          <Filter filteredMovies={setValue} />
        </div>
        <hr />
        <div className={styles.list}>
          <MovieList movies={value} />
        </div>
      </div>
    </Background>
  );
}

export default App;
