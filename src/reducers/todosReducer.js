import { uuid } from "../utils/uuid";
import getDate from "../utils/getDate";
const initState = [
  {
    id: uuid(),
    todo: "Do shopping Do shopping Do shopping Do shopping",
    description: "",
    completed: false,
    date: "January 7, 2020",
  },
  {
    id: uuid(),
    todo: "make programs",
    description: "",
    completed: false,
    date: "January 7, 2020",
  },
  {
    id: uuid(),
    todo: "wash car",
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

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
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
      return [...state];
    case "COMPLETE_TODO":
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return [...state];
    case "CLEAR_TODO":
      state = [];
      return [...state];
    default:
      console.log("Default");
      return [...state];
  }
};

export default todosReducer;
