import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task, Theme } from "./types";
import { format } from "date-fns";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Check for saved tasks in localStorage
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Load from localStorage first, fall back to system preference if not set
    const savedMode = localStorage.getItem("darkMode");
    return savedMode
      ? JSON.parse(savedMode)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    return (savedTheme as Theme) || "light-blue"; // Default to light-blue
  });

  useEffect(() => {
    // Save tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // Save dark mode preference
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [tasks, isDarkMode, theme]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask,
        status: "Pending",
        createdAt: format(new Date(), "dd/MM/yyyy HH:mm:ss")
      }
    ]);
    setNewTask("");
  };

  const updateTaskStatus = (id: number, status: Task["status"]) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex flex-col">
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          theme={theme}
          setTheme={setTheme}
        />
        <TaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          theme={theme}
        />
        <TaskList
          tasks={tasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default App;
