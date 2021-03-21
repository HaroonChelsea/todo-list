import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
function AddTodo() {
  const [AddTodo, setAddTodo] = React.useState("");
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [error]);
  const dispatch = useDispatch();
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mt-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (AddTodo) {
            dispatch(addTodo(AddTodo));
          } else {
            setError("Please! enter some value.");
          }
          setAddTodo("");
        }}
        className="rounded-md shadow-sm flex-1"
      >
        <input
          type="text"
          value={AddTodo}
          onChange={(e) => setAddTodo(e.target.value)}
          className="focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full pl-3 sm:text-xl border-gray-300 border rounded-md py-3 flex-1"
          placeholder="Add todo"
          autoComplete="off"
        />
        <p className="mt-2 lg:text-xl text-sm text-red-600">{error}</p>
      </form>
    </div>
  );
}

export default AddTodo;
