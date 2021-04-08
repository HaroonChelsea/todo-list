import { clearTodo } from "../../store/actions/todo-action";
import { useDispatch } from "react-redux";

export default function SelectTodos() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(clearTodo())}
      className="flex-shrink-0 bg-red-400 hover:bg-red-500 ml-1 text-white rounded p-2 focus:outline-none "
    >
      Clear All
    </button>
  );
}
