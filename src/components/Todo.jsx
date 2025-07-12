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
    <div className="flex justify-center items-center py-2 gap-2 rounded-2xl px-4 w-full">
      {" "}
      {/*for content */}
      {todoId ? (
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="bg-green-100 rounded-l-[5px] h-[40px] w-[500px] px-4 py-3"
        />
      ) : (
        <h1 className="font-bold text-xl text-violet-400">{todo.todoText}</h1>
      )}
      <div className="flex gap-5">
        {todoId ? (
          <div className="flex gap-5">
            <button
              onClick={handleCancel}
              className="border-2 px-3 py-1 bg-slate-500 text-white rounded-2xl"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="border-2 px-3 py-1 bg-yellow-500 text-white rounded-2xl"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex gap-5">
            <button
              onClick={handleEdit(todo.todoText, todo.todoId)}
              className="bg-yellow-500 cursor-pointer border px-4 py-1  rounded-2xl"
            >
              edit
            </button>
            <button
              onClick={() => handleDelete(todo.todoId)}
              className="border px-4 py-1 bg-red-500 rounded-2xl text-white"
            >
              Delete
            </button>
            <button
              onClick={() => handleComplete(todo.todoId)}
              className={`${todo.complete ? "bg-blue-500" : "bg-green-500"}`}
            >
              {todo.complete ? "undo" : "complete"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
