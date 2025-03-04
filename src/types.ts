export interface Task {
  id: number;
  title: string;
  status: "Pending" | "In Progress" | "Completed";
  createdAt: string;
}

export type Theme = "light-blue" | "red" | "green" | "orange";

export interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface TaskFormProps {
  newTask: string;
  setNewTask: (value: string) => void;
  addTask: (e: React.FormEvent) => void;
  theme: Theme;
}

export interface TaskListProps {
  tasks: Task[];
  updateTaskStatus: (id: number, status: Task["status"]) => void;
  deleteTask: (id: number) => void;
  theme: Theme;
}

export interface TaskCardProps {
  task: Task;
  onUpdateStatus: (id: number, status: Task["status"]) => void;
  onDelete: (id: number) => void;
  theme: Theme;
}

export interface DeleteButtonProps {
  onDelete: () => void;
}

export interface ExpandButtonProps {
  isCompact: boolean;
  onToggle: () => void;
}

export interface TaskStatusSelectProps {
  status: Task["status"];
  onStatusChange: (status: Task["status"]) => void;
  theme: Theme;
}

export interface ThemeSelectProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
