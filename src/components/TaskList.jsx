import React from "react";
import TaskItem from "./TaskItem";
import styles from "../styles/TaskList.module.css";

export default function TaskList({ tasks, onDelete, onEdit, onToggleComplete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className={styles.empty}>No tasks found.</p>
      ) : (
        <div className={styles.list}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
