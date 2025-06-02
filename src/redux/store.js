import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

// Load from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasksState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Failed to load from localStorage", err);
    return undefined;
  }
};

// Create store with preloaded state (if any)
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState: {
    tasks: loadState() || { tasks: [], taskToEdit: null },
  },
});

// Save to localStorage on every change
store.subscribe(() => {
  try {
    const state = store.getState();
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem("tasksState", serializedState);
  } catch (err) {
    console.error("Failed to save to localStorage", err);
  }
});

export default store;
