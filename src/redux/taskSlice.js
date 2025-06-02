import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  taskToEdit: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.tasks.push(action.payload);
      },
      prepare: (task) => ({
        payload: {
          ...task,
          id: nanoid(),
          completed: false,
        },
      }),
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
      state.taskToEdit = null;
    },
    setTaskToEdit: (state, action) => {
      state.taskToEdit = action.payload;
    },
    clearTaskToEdit: (state) => {
      state.taskToEdit = null;
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTaskComplete,
  updateTask,
  setTaskToEdit,
  clearTaskToEdit,
} = taskSlice.actions;

export default taskSlice.reducer;
