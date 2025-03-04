import React from "react";
import { HeaderProps } from "../types";
import ThemeSelect from "./ThemeSelect";

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleDarkMode,
  theme,
  setTheme
}) => {
  return (
    <header className="p-4 flex flex-col sm:flex-row justify-between items-center shrink-0 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 gap-2">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
        Oak Tyres Task Manager
      </h1>
      <div className="flex items-center gap-4">
        <ThemeSelect theme={theme} setTheme={setTheme} />
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
