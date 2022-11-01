import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TodosState = {
  todosList: Todo[];
};

const initialState: TodosState = {
  todosList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todosList.unshift({
        id: nanoid(),
        title: action.payload,
        isCompleted: false,
      });
    },
    toggleIsComplete(state, action: PayloadAction<string>) {
      const selectedTodo = state.todosList.find(
        (todo) => todo.id === action.payload
      );
      if (selectedTodo) {
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
      }
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    removeCompletedTodos(state) {
      state.todosList = state.todosList.filter(
        (todo) => todo.isCompleted === false
      );
    },
  },
});

export const { addTodo, toggleIsComplete, deleteTodo, removeCompletedTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
