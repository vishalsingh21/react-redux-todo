import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { todoFilterReducer } from "./todoFilterReducer";
import { editTodoReducer } from "./editTodoReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  filter: todoFilterReducer,
  editTodo: editTodoReducer
});
