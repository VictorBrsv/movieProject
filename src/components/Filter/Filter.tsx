import React from "react";
import { Input } from "./Input/Input";
import { Selecting } from "./Select/Select";
import { Sort } from "./Sort/Sort";
import { FilterProps } from "./filterProps";
import styles from "./Filter.module.css";

const Filter = ({ filteredMovies }: FilterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.form_box}>
        <form>
          <span>Choose movie: </span>
          <Input filteredMovies={filteredMovies} />
          <Selecting filteredMovies={filteredMovies} />
          <Sort filteredMovies={filteredMovies} />
        </form>
      </div>
    </div>
  );
};

export default Filter;
