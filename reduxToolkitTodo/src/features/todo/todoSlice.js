import { createSlice, nanoid } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1, text: "Hello world!" }],
  },

  //reducers are simply functionalities
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // toogleTodo: (state, action) => {},
  },
});
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
