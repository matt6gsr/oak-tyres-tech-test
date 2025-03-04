import React from "react";
import TaskCard from "./TaskCard";
import { TaskListProps } from "../types";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  updateTaskStatus,
  deleteTask
}) => {
  return (
    <main className="p-4 w-full max-w-2xl mx-auto flex-1 overflow-y-auto">
      <div className="grid gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onUpdateStatus={updateTaskStatus}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </main>
  );
};

export default TaskList;
