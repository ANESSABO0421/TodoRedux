import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoContainer = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="w-[520px] h-[50px] rounded-2xl px-4 py-3 flex justify-between items-center bg-gray-500 text-white">
      <div className="w-xl rounded-2xl flex gap-8 flex-col p-5 items-center bg-slate-200">
        {todos.map((todo) => {
          return <Todo key={todo.todoId} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoContainer;
