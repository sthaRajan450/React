import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return; // Prevent empty todos
    dispatch(addTodo(todo.trim())); // Trim spaces before dispatching
    setTodo("");
  };

  return (
    <div className="max-w-lg mx-auto mt-4">
      <form onSubmit={handleSubmit} className="flex shadow-md">
        <input
          type="text"
          placeholder="Write Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full border border-gray-300 rounded-l-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
