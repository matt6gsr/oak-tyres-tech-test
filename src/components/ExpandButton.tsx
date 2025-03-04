import React from "react";
import { ExpandButtonProps } from "../types";

const ExpandButton: React.FC<ExpandButtonProps> = ({ isCompact, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="hover:cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm sm:text-base transition-colors duration-300 ml-2"
      aria-label={isCompact ? "Expand task details" : "Collapse task details"}
    >
      {isCompact ? "▼" : "▲"}
    </button>
  );
};

export default ExpandButton;
