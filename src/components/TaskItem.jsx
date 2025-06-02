// TaskItem.js (Updated for Redux)
import React from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/TaskItem.module.css";
import {
  deleteTask,
  toggleTaskComplete,
  setTaskToEdit,
} from "../redux/taskSlice";

/**
 * TaskItem renders individual task details with Redux actions.
 */
export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const { id, name, description, completed, priority, dueDate } = task;

  return (
    <div className={`${styles.task} ${completed ? styles.completed : ""}`}>
      <div className={styles.text}>
        <h3>{name}</h3>
        <p>{description}</p>
        {priority && (
          <p className={styles.meta}>
            <strong>Priority:</strong> {priority}
          </p>
        )}
        {dueDate && (
          <p className={styles.meta}>
            <strong>Due:</strong> {new Date(dueDate).toLocaleDateString()}
          </p>
        )}
      </div>

      <div className={styles.actions}>
        <button
          onClick={() => dispatch(toggleTaskComplete(id))}
          className={styles.completeBtn}
        >
          {completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => dispatch(setTaskToEdit(task))}
          className={styles.editBtn}
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTask(id))}
          className={styles.deleteBtn}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
