const themeReducer = (state = "light", action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      const getState = state === "light" ? "dark" : "light";
      return (state = getState);
    default:
      return state;
  }
};

export default themeReducer;
