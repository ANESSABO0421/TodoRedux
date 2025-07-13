import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../feature/TodoSlice";

const Todo = ({ todo }) => {
  const [todoText, setTodoText] = useState("");
  const [todoId, setTodoId] = useState("");

  const dispatch = useDispatch();

  const handleDelete = (tId) => {
    dispatch(deleteTodo(tId));
  };
  const handleEdit = (tText, tId) => {
    setTodoId(tId);
    setTodoText(tText);
  };
  const handleCancel = (tId) => {
    setTodoId("");
    setTodoText("");
  };

  const handleSave = () => {
    const uTodo = { todoText, todoId };
    dispatch(editTodo(uTodo));
    setTodoId("");
    setTodoText("");
  };

  const handleComplete = (tId) => {
    dispatch(toggleTodo(tId));
  };

  return (
    <div className="flex justify-between items-center w-full bg-white shadow-md px-6 py-3 rounded-xl">
      {todoId ? (
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="bg-green-100 rounded-md h-[40px] w-[400px] px-4 py-2 border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      ) : (
        <h1
          className={`font-semibold text-lg ${
            todo.complete ? "line-through text-gray-400" : "text-violet-500"
          }`}
        >
          {todo.todoText}
        </h1>
      )}

      <div className="flex gap-3">
        {todoId ? (
          <>
            <button
              onClick={handleCancel}
              className="px-4 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleEdit(todo.todoText, todo.todoId)}
              className="px-4 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(todo.todoId)}
              className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
            <button
              onClick={() => handleComplete(todo.todoId)}
              className={`px-4 py-1 text-white rounded-md transition ${
                todo.complete ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {todo.complete ? "Undo" : "Complete"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
