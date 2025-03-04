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
      className={`p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transform transition-all duration-300 ${
        isExiting ? "scale-95 opacity-0" : "scale-100 opacity-100"
      }`}
      role="article"
      aria-label={`Task: ${task.title}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h3 className="text-base sm:text-lg font-medium text-gray-800 dark:text-white break-words">
          {task.title}
        </h3>
        <div className="flex items-center gap-2">
          <select
            value={task.status}
            onChange={(e) =>
              onUpdateStatus(task.id, e.target.value as Task["status"])
            }
            className="w-full sm:w-auto text-sm p-1 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleDelete} aria-label="Delete task">
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
