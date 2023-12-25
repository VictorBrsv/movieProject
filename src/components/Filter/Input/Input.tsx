import { ChangeEvent, useState } from "react";
import movies from "../../../movies";
import { FilterProps } from "../filterProps";
import styles from "./Input.module.css";

export const Input = ({ filteredMovies }: FilterProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    const filteredMoviesByInput = movies.filter((movie) =>
      movie.title.includes(event.target.value)
    );
    filteredMovies(filteredMoviesByInput);
  };

  return (
    <div className={styles.input_box}>
      <input
        type='text'
        value={inputValue}
        onChange={handleChangeInput}
        placeholder='Enter title...'
      ></input>
    </div>
  );
};
