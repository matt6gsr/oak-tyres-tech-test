import React from "react";
import { DarkModeToggleProps } from "../types";

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  isDarkMode,
  toggleDarkMode
}) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Dark mode toggle"
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
