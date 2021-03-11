import React from "react";
import { clearTodo } from "../actions";
import { useDispatch } from "react-redux";

export default function SelectTodos() {
  const dispatch = useDispatch();
  return (
    <div className="max-w-5xl mx-auto sm:px-6  lg:px-8 my-3 bg-white">
      <button
        onClick={() => dispatch(clearTodo())}
        className="bg-red-400 hover:bg-red-500 ml-1 text-white rounded p-2 focus:outline-none "
      >
        Clear All
      </button>
    </div>
  );
}
