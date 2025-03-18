import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No todos available.</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
            >
              <span className="text-gray-800">{todo.text}</span>
              <div className="space-x-2">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() =>
                    dispatch(updateTodo({ id: todo.id, text: "updated text" }))
                  }
                >
                  Update
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
