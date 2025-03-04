import React from "react";
import { HeaderProps } from "../types";
import ThemeSelect from "./ThemeSelect";
import DarkModeToggle from "./DarkModeToggle";

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
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </header>
  );
};

export default Header;
