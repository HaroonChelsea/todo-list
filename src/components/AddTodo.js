import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
function AddTodo() {
  const [AddTodo, setAddTodo] = React.useState("");
  const dispatch = useDispatch();
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mt-5">
      <div className="flex justify-between">
        <div className="relative rounded-md shadow-sm flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={AddTodo}
            onChange={(e) => setAddTodo(e.target.value)}
            className="focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full pl-10 sm:text-sm border-gray-300 border rounded-md py-3 flex-1"
            placeholder="add todo"
            autoComplete="off"
          />
        </div>
        <button
          onClick={() => {
            if (AddTodo) {
              dispatch(addTodo(AddTodo));
            }
            setAddTodo("");
          }}
          type="submit"
          className="flex-shrink-0 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
