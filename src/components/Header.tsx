import React from "react";
import { HeaderProps, Theme } from "../types";

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleDarkMode,
  theme,
  setTheme
}) => {
  const themeOptions: Theme[] = ["light-blue", "red", "green", "orange"];

  return (
    <header className="p-4 flex flex-col sm:flex-row justify-between items-center shrink-0 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 gap-2">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
        Oak Tyres Task Manager
      </h1>
      <div className="flex items-center gap-4">
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className={`p-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-${
            theme === "light-blue" ? "blue-400" : `${theme}-500`
          } transition-colors duration-300`}
        >
          {themeOptions.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() +
                option.slice(1).replace("-", " ")}
            </option>
          ))}
        </select>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
