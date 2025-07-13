import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoContainer = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="w-full max-w-[700px] rounded-2xl px-4 py-6 bg-gray-100 shadow-md">
      <div className="w-full flex flex-col gap-10 items-center rounded-xl p-4">
        {todos.map((todo) => {
          return <Todo key={todo.todoId} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoContainer;
