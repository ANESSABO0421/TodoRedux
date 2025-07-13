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
    <div className="w-full min-h-screen bg-gradient-to-br from-green-100 to-lime-200 px-4 py-10">
      <div className="flex items-center flex-col w-full max-w-[850px] bg-white rounded-2xl gap-6 p-8 shadow-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-700 drop-shadow-sm text-center">
          📝 TODO APPLICATION
        </h1>

        <form className="flex flex-col sm:flex-row w-full max-w-[650px] gap-4" onSubmit={handleSubmitTodo}>
          <input
            type="text"
            className="bg-green-100 rounded-md h-[45px] w-full px-4 py-2 text-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 h-[45px] px-6 text-white font-semibold text-lg rounded-md hover:bg-green-600 transition-all"
          >
            Submit
          </button>
        </form>

        <div className="w-full max-w-[700px] max-h-[400px] overflow-y-auto pr-2">
          <TodoContainer />
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
