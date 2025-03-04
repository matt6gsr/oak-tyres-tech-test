import React, { useState } from "react";
import { Task, TaskCardProps } from "../types";

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onUpdateStatus,
  onDelete
}) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleDelete = () => {
    setIsExiting(true);
    setTimeout(() => onDelete(task.id), 300);
  };

  return (
    <div
      className={`p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transform transition-all duration-300 ${
        isExiting ? "scale-95 opacity-0" : "scale-100 opacity-100"
      }`}
      role="article"
      aria-label={`Task: ${task.title}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          {task.title}
        </h3>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-600"
          aria-label="Delete task"
        >
          🗑️
        </button>
      </div>

      <select
        value={task.status}
        onChange={(e) =>
          onUpdateStatus(task.id, e.target.value as Task["status"])
        }
        className="mt-2 p-1 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskCard;
