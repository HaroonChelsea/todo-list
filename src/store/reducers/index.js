import { combineReducers } from "redux";

import todos from "./todosReducer";
import theme from "./themeReducer";

export default combineReducers({
  todos,
  theme
});