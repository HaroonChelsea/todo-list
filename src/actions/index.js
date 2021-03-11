const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const CLEAR_TODO = "CLEAR_TODO";
const CHANGE_THEME = "CHANGE_THEME";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});
export const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});
export const completeTodo = (payload) => ({
  type: COMPLETE_TODO,
  payload,
});
export const clearTodo = () => ({
  type: CLEAR_TODO,
});
export const changeTheme = () => ({
  type: CHANGE_THEME,
});
