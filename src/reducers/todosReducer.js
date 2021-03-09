const initState = [
  {
    id: 780,
    todo: "Play football",
    completed: false,
  },
];

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case "All":
      return [...state];
    default:
      return [...state];
  }
};

export default todosReducer;
