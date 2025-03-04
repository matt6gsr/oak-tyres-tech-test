import React, { useState } from "react";
import { Task, TaskCardProps } from "../types";
import DeleteButton from "./DeleteButton";
import ExpandButton from "./ExpandButton";
import TaskStatusSelect from "./TaskStatusSelect";

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onUpdateStatus,
  onDelete,
  theme
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

  const handleStatusChange = (status: Task["status"]) => {
    onUpdateStatus(task.id, status);
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
              <ExpandButton isCompact={isCompact} onToggle={toggleView} />
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
            <TaskStatusSelect
              status={task.status}
              onStatusChange={handleStatusChange}
              theme={theme}
            />
            <ExpandButton isCompact={isCompact} onToggle={toggleView} />
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
          <TaskStatusSelect
            status={task.status}
            onStatusChange={handleStatusChange}
            theme={theme}
          />
          <DeleteButton onDelete={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default TaskCard;
