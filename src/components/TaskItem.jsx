import React from "react";
import styles from "../styles/TaskItem.module.css";

/**
 * TaskItem renders individual task details with controls.
 */
export default function TaskItem({ task, onDelete, onEdit, onToggleComplete }) {
  const { id, name, description, completed, priority, dueDate } = task;

  return (
    <div className={`${styles.task} ${completed ? styles.completed : ""}`}>
      <div className={styles.text}>
        <h3>{name}</h3>
        <p>{description}</p>
        {priority && <p className={styles.meta}><strong>Priority:</strong> {priority}</p>}
        {dueDate && <p className={styles.meta}><strong>Due:</strong> {new Date(dueDate).toLocaleDateString()}</p>}
      </div>

      <div className={styles.actions}>
        <button onClick={() => onToggleComplete(id)} className={styles.completeBtn}>
          {completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onEdit(task)} className={styles.editBtn}>Edit</button>
        <button onClick={() => onDelete(id)} className={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
}
