import React, { useEffect, useState } from "react";
import styles from "../styles/TaskForm.module.css";

export default function TaskForm({ onAdd, onUpdate, taskToEdit, onCancel }) {
  const [task, setTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTask({
        name: taskToEdit.name,
        description: taskToEdit.description,
        dueDate: taskToEdit.dueDate || "",
        priority: taskToEdit.priority || "Medium",
      });
      setError("");
    } else {
      setTask({
        name: "",
        description: "",
        dueDate: "",
        priority: "Medium",
      });
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = task.name.trim();
    const trimmedDescription = task.description.trim();

    if (!trimmedName || !trimmedDescription) {
      setError("Both task name and description are required.");
      return;
    }

    const newTask = {
      ...task,
      name: trimmedName,
      description: trimmedDescription,
    };

    if (taskToEdit) {
      onUpdate({ ...taskToEdit, ...newTask });
    } else {
      onAdd(newTask);
    }

    setTask({
      name: "",
      description: "",
      dueDate: "",
      priority: "Medium",
    });
    setError("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>
        {taskToEdit ? "Edit Task" : "Add New Task"}
      </h2>

      {error && <p className={styles.error}>{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
        className={styles.input}
      />

      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        className={styles.textarea}
        rows={3}
      />

      <label className={styles.label}>
        Due Date:
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Priority:
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className={styles.input}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitBtn}>
          {taskToEdit ? "Update Task" : "Add Task"}
        </button>
        {taskToEdit && (
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
