export interface Task {
  id: number;
  title: string;
  status: "Pending" | "In Progress" | "Completed";
}

export interface TaskCardProps {
  task: Task;
  onUpdateStatus: (id: number, status: Task["status"]) => void;
  onDelete: (id: number) => void;
}
