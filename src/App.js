import React, { useState, useEffect } from "react";
import BackgroundAnimation from "./components/BackgroundAnimation";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import styles from "./styles/App.module.css";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filter, setFilter] = useState("All"); // All | Completed | Incomplete
  const [sortBy, setSortBy] = useState(""); // "" | "priority" | "dueDate"

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      { ...task, id: Date.now(), completed: false },
    ]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prev) => prev.filter((task) => task.id !== id));
      if (taskToEdit?.id === id) setTaskToEdit(null);
    }
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  const cancelEdit = () => {
    setTaskToEdit(null);
  };

  // FILTERED + SORTED TASKS
  const getFilteredSortedTasks = () => {
    let filtered = [...tasks];

    // Filter
    if (filter === "Completed") {
      filtered = filtered.filter((task) => task.completed);
    } else if (filter === "Incomplete") {
      filtered = filtered.filter((task) => !task.completed);
    }

    // Sort
    if (sortBy === "priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    } else if (sortBy === "dueDate") {
      filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }

    return filtered;
  };

  return (
    <div className={styles.appContainer}>
      <BackgroundAnimation />
      <div className={styles.appContent}>
        <h1 className={styles.title}>Extraterrestrial To-Do List</h1>

        <div className={styles.controls}>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className={styles.select}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={styles.select}>
            <option value="">Sort By</option>
            <option value="priority">Priority</option>
            <option value="dueDate">Due Date</option>
          </select>
        </div>

        <TaskForm
          onAdd={addTask}
          onUpdate={updateTask}
          taskToEdit={taskToEdit}
          onCancel={cancelEdit}
        />

        <TaskList
          tasks={getFilteredSortedTasks()}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
          onEdit={editTask}
        />
      </div>
    </div>
  );
}
