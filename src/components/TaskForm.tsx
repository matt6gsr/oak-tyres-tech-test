import React from "react";
import { TaskFormProps } from "../types";

const TaskForm: React.FC<TaskFormProps> = ({
  newTask,
  setNewTask,
  addTask
}) => {
  return (
    <form onSubmit={addTask} className="p-4 w-full max-w-2xl mx-auto shrink-0">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
