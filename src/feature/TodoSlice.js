import { createSlice } from "@reduxjs/toolkit";
import { compile } from "tailwindcss";

const TodoSlice = createSlice({
  name: "todo",
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        todoText: action.payload,
        todoId: Date.now(),
        complete: false,
      };
      state.push(newTodo);
    },
    editTodo: (state, action) => {
      const { todoText, todoId } = action.payload;

      state.map((todo) => {
        if (todo.todoId === todoId) {
          todo.todoText === todoText;
        }
        return todo;
      });
    },
    toggleTodo: (state, action) => {
      state.map((todo) => {
        if (todo.todoId === action.payload) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => {
        todo.todoId != action.payload;
      });
    },
  },
});

export const { editTodo, deleteTodo, addTodo, toggleTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
