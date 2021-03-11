import React from "react";
import Nav from "./components/Nav";
import AddTodo from "./components/AddTodo";
import { useSelector } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DisPlayModal from "./components/Modal";
import ClearTodos from "./components/ClearTodos";
import Todo from "./components/Todo";

function App() {
  const todos = useSelector((state) => state.todos);
  const theme = useSelector((state) => state.theme);
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.setAttribute("class", theme);
      document.body.setAttribute("class", " dark:bg-gray-700 h-full");
    } else {
      root.setAttribute("class", theme);
    }
  }, [theme]);
  return (
    <div className="">
      <Router>
        <Nav />
        <AddTodo />
        {todos.length > 0 ? <ClearTodos /> : ""}
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 mt-5">
          <div
            className={
              todos.length > 0
                ? "bg-white dark:bg-gray-900 dark:text-white shadow overflow-hidden sm:rounded-md"
                : "bg-white dark:bg-gray-700 overflow-hidden sm:rounded-md"
            }
          >
            <ul className="divide-y divide-gray-200">
              {todos.length > 0 ? (
                todos.map((todo) => <Todo key={todo.id} todo={todo} />)
              ) : (
                <li>
                  <div className="bg-red-500 text-center w-1/3 mx-auto rounded p-4 text-lg font-bold text-white">
                    Please add todo!
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
              return <DisPlayModal match checkRoute={"editTodo"} />;
            }}
          />
          <Route
            path={"/:todoId"}
            children={({ match }) => {
              return <DisPlayModal match checkRoute={"displayTodo"} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
