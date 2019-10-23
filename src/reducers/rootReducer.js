import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { todoFilterReducer } from "./todoFilterReducer";
import { editTodoTitleReducer } from "./editTodoTitleReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  filter: todoFilterReducer,
  editTodoTitle: editTodoTitleReducer
});
