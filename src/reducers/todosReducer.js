import { uuid } from "../utils/uuid";
import getDate from "../utils/getDate";
let initState;
if (JSON.parse(localStorage.getItem("todos"))) {
  initState = JSON.parse(localStorage.getItem("todos"));
} else {
  initState = [
    {
      id: uuid(),
      todo: "Do shopping",
      description: "",
      completed: false,
      date: "January 7, 2020",
    },
    {
      id: uuid(),
      todo: "Make programs",
      description: "",
      completed: false,
      date: "January 7, 2020",
    },
    {
      id: uuid(),
      todo: "Wash car",
      description: "",
      completed: false,
      date: "January 7, 2020",
    },
    {
      id: uuid(),
      todo: "Play football",
      description: "",
      completed: false,
      date: "January 7, 2020",
    },
  ];
  localStorage.setItem("todos", JSON.stringify(initState));
}

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...state,
          {
            id: uuid(),
            todo:
              action.payload.charAt(0).toUpperCase() + action.payload.slice(1),
            description: "",
            completed: false,
            date: getDate(),
          },
        ])
      );
      return [
        ...state,
        {
          id: uuid(),
          todo:
            action.payload.charAt(0).toUpperCase() + action.payload.slice(1),
          description: "",
          completed: false,
          date: getDate(),
        },
      ];
    case "DELETE_TODO":
      const todos = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify([...todos]));
      return [...todos];
    case "UPDATE_TODO":
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.todo =
            action.payload.todo.charAt(0).toUpperCase() +
            action.payload.todo.slice(1);
          todo.description =
            action.payload.description.charAt(0).toUpperCase() +
            action.payload.description.slice(1);
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify([...state]));
      return [...state];
    case "COMPLETE_TODO":
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify([...state]));
      return [...state];
    case "CLEAR_TODO":
      state = [];
      localStorage.setItem("todos", JSON.stringify([...state]));
      return [...state];
    default:
      localStorage.setItem("todos", JSON.stringify([...state]));
      return [...state];
  }
};

export default todosReducer;
