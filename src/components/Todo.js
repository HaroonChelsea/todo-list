import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { completeTodo } from "../actions";
export default function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <li className="hover:bg-gray-50 dark:hover:bg-gray-600">
      <div className="px-4 py-4 flex items-center sm:px-6">
        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex">
              <Link
                className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-800"
                to={`/${todo.id}`}
              >
                {todo.todo}
              </Link>
              {todo.completed && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-200 text-green-800">
                  Completed
                </span>
              )}
            </div>
            <div className="mt-2 flex">
              <div className="flex items-center text-sm text-gray-500">
                <svg
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  data-todo-x-description="Heroicon name: solid/calendar"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p>
                  <time>{todo.date}</time>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 flex-shrink-0">
          <div className="flex justify-between">
            {todo.completed ? (
              <button
                onClick={() => dispatch(completeTodo(todo.id))}
                className="bg-red-400 hover:bg-red-500 font-bold p-2 rounded focus:ring-red-400 focus:outline-none mx-1"
              >
                <svg
                  className="w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => dispatch(completeTodo(todo.id))}
                className="bg-green-400 hover:bg-green-500 font-bold p-2 rounded focus:ring-green-400 focus:outline-none mx-1"
              >
                <svg
                  className="w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
