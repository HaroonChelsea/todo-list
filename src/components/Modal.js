import Modal from "react-modal";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Display from "./Display";
import Edit from "./Edit";
import { deleteTodo } from "../actions";

function DisPlayModal({ checkRoute, match }) {
  const { todoId } = useParams();
  const history = useHistory();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  let currentTodo;
  todos.map((todo) => {
    if (todo.id === todoId) {
      currentTodo = todo;
    }
    return currentTodo;
  });
  if (currentTodo) {
  } else {
    window.location = "/";
  }
  return (
    <Modal
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(70, 70, 70, 0.486)",
        },
        content: {
          position: "absolute",
          margin: "auto",
          border: "1px solid #ccc",
          background: "#F9FAFB",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          maxWidth: "550px",
          maxHeight: "300px",
        },
      }}
      isOpen={Boolean(match)}
      onRequestClose={() => history.push("/")}
      ariaHideApp={false}
    >
      <div className="relative w-full h-full bg-gray-50">
        {checkRoute === "displayTodo" ? (
          currentTodo ? (
            <Display todo={currentTodo} />
          ) : (
            "Loading..."
          )
        ) : currentTodo ? (
          <Edit todo={currentTodo} />
        ) : (
          "Loading..."
        )}
        {checkRoute === "displayTodo" ? (
          <div className="absolute bottom-0 right-0 flex justify-between">
            <button
              onClick={() => {
                dispatch(deleteTodo(currentTodo.id));
                history.push("/");
              }}
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
            <Link
              to={`/editing/${currentTodo.id}`}
              className="bg-blue-400 hover:bg-blue-500 font-bold p-2 rounded focus:ring-blue-400 focus:outline-none mx-1"
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </Modal>
  );
}

export default DisPlayModal;
