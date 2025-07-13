import React, { useState } from "react";
import TodoContainer from "./TodoContainer";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/TodoSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="flex items-center flex-col min-h-[600px] w-full max-w-[850px] bg-red-200 rounded-2xl gap-6 p-6 shadow-lg mx-auto">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-md">TODO APPLICATION</h1>

      <form className="flex w-full max-w-[650px]" onSubmit={handleSubmitTodo}>
        <input
          type="text"
          className="bg-green-100 rounded-l-md h-[45px] w-full px-4 py-2 text-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-amber-400 h-[45px] px-6 text-white font-semibold text-lg rounded-r-md hover:bg-amber-500 transition-all"
        >
          Submit
        </button>
      </form>

      <div className="w-full max-w-[700px]">
        <TodoContainer />
      </div>
    </div>
  );
};

export default TodoForm;
