import React from "react";
import { Task, TaskStatusSelectProps } from "../types";

const TaskStatusSelect: React.FC<TaskStatusSelectProps> = ({
  status,
  onStatusChange,
  theme
}) => {
  return (
    <select
      value={status}
      onChange={(e) => onStatusChange(e.target.value as Task["status"])}
      className={`w-auto p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-${
        theme === "light-blue" ? "blue-400" : `${theme}-500`
      } transition-colors duration-300`}
    >
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default TaskStatusSelect;
