import React, { useState } from "react";
import { Task, TaskCardProps } from "../types";

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onUpdateStatus,
  onDelete
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isCompact, setIsCompact] = useState(true);

  const handleDelete = () => {
    setIsExiting(true);
    setTimeout(() => onDelete(task.id), 300);
  };

  const toggleView = () => {
    setIsCompact(!isCompact);
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
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 dark:text-white break-words">
              {task.title}
            </h3>
            {!isCompact && (
              <button
                onClick={toggleView}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm sm:text-base transition-colors duration-300 ml-2"
                aria-label={
                  isCompact ? "Expand task details" : "Collapse task details"
                }
              >
                {isCompact ? "▼" : "▲"}
              </button>
            )}
          </div>
          <div
            className={`transition-all duration-300 ease-in-out ${
              isCompact
                ? "opacity-0 scale-y-0 h-0 overflow-hidden"
                : "opacity-100 scale-y-100 h-auto"
            }`}
          >
            <div className="mt-2">
              <span className="text-xs text-gray-500 dark:text-gray-400 block mb-2">
                Status: {task.status}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 block mb-2">
                Created: {task.createdAt}
              </span>
            </div>
          </div>
        </div>
        {isCompact && (
          <div className="flex items-center gap-2">
            <select
              value={task.status}
              onChange={(e) =>
                onUpdateStatus(task.id, e.target.value as Task["status"])
              }
              className="w-full sm:w-auto text-sm p-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <button
              onClick={toggleView}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm sm:text-base transition-colors duration-300 ml-2"
              aria-label={
                isCompact ? "Expand task details" : "Collapse task details"
              }
            >
              {isCompact ? "▼" : "▲"}
            </button>
          </div>
        )}
      </div>
      {!isCompact && (
        <div
          className={`mt-2 flex justify-between gap-2 transition-all duration-300 ease-in-out ${
            isCompact
              ? "opacity-0 scale-y-0 h-0 overflow-hidden"
              : "opacity-100 scale-y-100 h-auto"
          }`}
        >
          <select
            value={task.status}
            onChange={(e) =>
              onUpdateStatus(task.id, e.target.value as Task["status"])
            }
            className="w-full sm:w-auto text-sm p-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            onClick={handleDelete}
            aria-label="Delete task"
            className="text-2xl"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
