import React from "react";
import AddTodo from "./components/AddTodo";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DisPlayModal from "./components/Modal";
import Actions from "./components/Actions";
import Todo from "./components/Todo";
import { changeTheme } from "./actions";

function App() {
  const todos = useSelector((state) => state.todos);

  const theme = useSelector((state) => state.theme);
  const [status, setStatus] = React.useState("null");
  const [filteredTodos, setFilteredTodos] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.setAttribute("class", theme);
      document.body.setAttribute("class", " dark:bg-gray-700 h-full");
    } else {
      root.setAttribute("class", theme);
    }
  }, [theme]);
  const filter = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "notCompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  React.useEffect(() => {
    filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, todos]);
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex justify-between sm:px-6 lg:px-8">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-4xl font-extrabold lg:text-6xl">
          TODO List
        </h2>
        <div className="text-gray-400 mt-3 lg:mt-6">
          {theme === "light" ? (
            <svg
              onClick={() => dispatch(changeTheme())}
              className="h-6 w-6 lg:h-8 lg:w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                  className="fk-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                  className="fk-primary"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              onClick={() => dispatch(changeTheme())}
              className="h-6 w-6 lg:h-8 lg:w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                  className="fk-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                  className="fk-primary"
                ></path>
              </g>
            </svg>
          )}
        </div>
      </div>
      <div className="mt-2">
        <Router>
          <AddTodo />
          <div className="max-w-5xl mx-auto sm:px-6  lg:px-8 my-3 bg-white dark:bg-gray-700 flex justify-between">
            {filteredTodos.length > 0 ? <Actions setStatus={setStatus} /> : ""}
            <select
              defaultValue="All"
              onChange={(e) => setStatus(e.target.value)}
              className="flex-1 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-600 dark:border-black dark:text-white"
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="notCompleted">Not Completed</option>
            </select>
          </div>

          <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 mt-5">
            <div
              className={
                filteredTodos.length > 0
                  ? "bg-white dark:bg-gray-900 dark:text-white shadow overflow-hidden sm:rounded-md"
                  : "bg-white dark:bg-gray-700 overflow-hidden sm:rounded-md"
              }
            >
              <ul className="divide-y divide-gray-200">
                {filteredTodos.length > 0 ? (
                  filteredTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                  ))
                ) : (
                  <li>
                    <div className="rounded-md bg-yellow-100 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-yellow-400"
                            x-description="Heroicon name: solid/exclamation"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-yellow-800">
                            Nothing found.
                          </h3>
                          <div className="mt-2 text-sm text-yellow-700">
                            <p>Please! add some todos to the list.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <Switch>
            <Route
              path={"/editing/:todoId"}
              children={({ match }) => {
                return <DisPlayModal match={match} checkRoute={"editTodo"} />;
              }}
            />
            <Route
              path={"/:todoId"}
              children={({ match }) => {
                return (
                  <DisPlayModal match={match} checkRoute={"displayTodo"} />
                );
              }}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
