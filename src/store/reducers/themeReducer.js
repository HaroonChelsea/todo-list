let initState;
if (localStorage.getItem("theme")) {
  initState = localStorage.getItem("theme");
} else {
  localStorage.setItem("theme", "light");
  initState = "light";
}
const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      const getState = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", getState);
      return (state = getState);
    default:
      return state;
  }
};

export default themeReducer;
