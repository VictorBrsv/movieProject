import React from "react";
import Select from "react-select";
import movies from "../../../data/movies";
import { Years } from "../../../data/types";
import { years } from "../const";
import { sortedYears } from "../const";
import { FilterProps } from "../filterProps";
import styles from "./Select.module.css";

export const Selecting = ({ filteredMovies }: FilterProps) => {
  const handleChangeSelect = (years: Years | null) => {
    const filtered = years
      ? movies.filter((movie) => movie.year === Number(years.value))
      : movies;
    filteredMovies(filtered);
  };
  return (
    <div className={styles.select_box}>
      <Select
        className={styles.select}
        options={sortedYears(years)}
        onChange={handleChangeSelect}
        placeholder='Select a year'
      />
    </div>
  );
};

export default Select;
