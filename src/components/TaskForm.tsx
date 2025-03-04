import React from "react";
import { TaskFormProps } from "../types";

const TaskForm: React.FC<TaskFormProps> = ({
  newTask,
  setNewTask,
  addTask,
  theme
}) => {
  const buttonStyles = {
    "light-blue": "bg-blue-400 hover:bg-blue-500 focus:ring-blue-400",
    red: "bg-red-500 hover:bg-red-600 focus:ring-red-500",
    green: "bg-green-500 hover:bg-green-600 focus:ring-green-500",
    orange: "bg-orange-500 hover:bg-orange-600 focus:ring-orange-500"
  };

  return (
    <form onSubmit={addTask} className="p-4 w-full max-w-2xl mx-auto shrink-0">
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className={`w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-${
            theme === "light-blue" ? "blue-400" : `${theme}-500`
          } transition-colors duration-300`}
        />
        <button
          type="submit"
          className={`w-28 py-2 text-white rounded-lg transition-colors duration-300 ${buttonStyles[theme]}`}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
