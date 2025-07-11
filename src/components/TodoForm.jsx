import React from "react";

const TodoForm = () => {
  return (
    <div className="flex  items-center flex-col h-[500px] w-[800px] bg-red-300 rounded-2xl gap-5 ">
      <h1 className="text-3xl font-bold">TODO APPLICATION</h1>
      <form className="flex">
        <input type="text" className="bg-green-100 rounded-l-[5px] h-[40px] w-[500px] px-4 py-3" placeholder="enter your task"/>
        <button className="bg-amber-200 h-[40px] rounded-r-[5px] px-4">
          Submit
        </button>
      </form>
      <div>
        
      </div>
    </div>
  );
};

export default TodoForm;
