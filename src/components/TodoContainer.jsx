import React from "react";
import Todo from "./Todo";

const TodoContainer = () => {
  return (
    <div className="w-[520px] h-[50px] rounded-2xl px-4 py-3 flex justify-between items-center bg-gray-500 text-white">
      TodoContainer
      <div className="flex gap-3">
        <Todo/>
      </div>
    </div>
  );
};

export default TodoContainer;
