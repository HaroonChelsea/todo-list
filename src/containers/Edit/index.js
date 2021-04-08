import React from "react";
import { updateTodo } from "../../store/actions/todo-action";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Edit({ todo }) {
  const [updTodo, setUpdTodo] = React.useState(todo.todo);
  const [updateDescription, setUpdateDescription] = React.useState(
    todo.description
  );
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="">
      <input
        type="text"
        autoComplete="off"
        className="block w-full border p-2 text-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md mb-3"
        value={updTodo}
        onChange={(e) => setUpdTodo(e.target.value)}
      />
      <textarea
        value={updateDescription}
        onChange={(e) => setUpdateDescription(e.target.value)}
        rows="3"
        className="w-full shadow-sm block focus: focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md p-2 text-xl"
      ></textarea>
      <p className="mt-2 text-sm text-gray-500">Add description of the todo.</p>
      <div className="mt-2">
        <button
          onClick={() => {
            dispatch(
              updateTodo({
                id: todo.id,
                todo: updTodo,
                description: updateDescription,
              })
            );
            history.push(`/${todo.id}`);
          }}
          className=" bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded focus:ring-green-400 focus:outline-none mx-1 "
        >
          Update
        </button>
        <Link
          to={`/`}
          className=" bg-red-400 hover:bg-red-500 text-white font-bold p-2 rounded focus:ring-red-400 focus:outline-none mx-1 "
        >
          Close
        </Link>
      </div>
    </div>
  );
}
