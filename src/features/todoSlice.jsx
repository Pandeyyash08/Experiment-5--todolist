import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [], // Starts as an empty array []
  reducers: {
    // 1. Add Task
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload,
        status: "pending",
      };
      state.push(newTask);
    },
    // 2. Delete Task
    deleteTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // 3. Change Status
    toggleStatus: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.status = todo.status === "pending" ? "done" : "pending";
      }
    },
  },
});

export const { addTask, deleteTask, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
