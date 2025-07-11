import React from "react";

const Todo = () => {
  return (
    <div className="flex gap-2">
      <button className="bg-red-500 h-[40px] w-[50px] rounded-xl text-black">
        delete
      </button>
      <button className="bg-yellow-300 h-[40px] w-[50px] rounded-xl text-black">
        Edit
      </button>
    </div>
  );
};

export default Todo;
