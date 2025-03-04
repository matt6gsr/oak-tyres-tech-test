import React from "react";
import { DeleteButtonProps } from "../types";

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="hover:cursor-pointer text-2xl"
      aria-label="Delete task"
    >
      🗑️
    </button>
  );
};

export default DeleteButton;
