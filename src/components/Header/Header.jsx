import React, { useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, idx) => (
          <li key={idx}>
            <button
              className={`${styles.filter} ${
                value === filter && styles.selected
              }`}
              onClick={() => {
                onFilterChange(value);
              }}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
