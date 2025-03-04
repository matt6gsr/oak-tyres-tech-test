import React from "react";
import { HeaderProps } from "../types";

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="p-4 flex justify-between items-center shrink-0 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 gap-2">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
        Oak Tyres Task Manager
      </h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-lg"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
