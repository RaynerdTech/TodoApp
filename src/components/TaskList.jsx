// TaskList.js (Updated for Redux)
import React from "react";
import { useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import styles from "../styles/TaskList.module.css";
import {
  deleteTask,
  toggleTaskComplete,
  setTaskToEdit,
} from "../redux/taskSlice";

export default function TaskList({ tasks }) {
  const dispatch = useDispatch();

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
              onDelete={() => dispatch(deleteTask(task.id))}
              onEdit={() => dispatch(setTaskToEdit(task))}
              onToggleComplete={() => dispatch(toggleTaskComplete(task.id))}
            />
          ))}
        </div>
      )}
    </div>
  );
}