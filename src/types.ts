export interface Task {
  id: number;
  title: string;
  status: "Pending" | "In Progress" | "Completed";
  createdAt: string;
}

export interface TaskCardProps {
  task: Task;
  onUpdateStatus: (id: number, status: Task["status"]) => void;
  onDelete: (id: number) => void;
}

export interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface TaskFormProps {
  newTask: string;
  setNewTask: (value: string) => void;
  addTask: (e: React.FormEvent) => void;
}

export interface TaskListProps {
  tasks: Task[];
  updateTaskStatus: (id: number, status: Task["status"]) => void;
  deleteTask: (id: number) => void;
}

export interface DeleteButtonProps {
  onDelete: () => void;
}

export interface ExpandButtonProps {
  isCompact: boolean;
  onToggle: () => void;
}
