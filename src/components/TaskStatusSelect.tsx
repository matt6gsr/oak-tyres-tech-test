import React from "react";
import { Task, TaskStatusSelectProps } from "../types";

const TaskStatusSelect: React.FC<TaskStatusSelectProps> = ({
  status,
  onStatusChange
}) => {
  return (
    <select
      value={status}
      onChange={(e) => onStatusChange(e.target.value as Task["status"])}
      className="w-auto text-sm p-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
    >
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default TaskStatusSelect;
