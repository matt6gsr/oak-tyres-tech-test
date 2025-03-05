import React from "react";
import { Theme, ThemeSelectProps } from "../types";

const ThemeSelect: React.FC<ThemeSelectProps> = ({ theme, setTheme }) => {
  const themeOptions: Theme[] = ["light-blue", "red", "green", "orange"];

  return (
    <select
      value={theme}
      aria-label="Theme selector"
      onChange={(e) => setTheme(e.target.value as Theme)}
      className={`p-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-${
        theme === "light-blue" ? "blue-400" : `${theme}-500`
      } transition-colors duration-300`}
    >
      {themeOptions.map((option) => (
        <option key={option} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1).replace("-", " ")}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelect;
