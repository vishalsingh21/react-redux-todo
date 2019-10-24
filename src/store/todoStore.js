import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "../reducers/todoReducer";

const initialState = {
  todos: [],
  filter: "all",
  editTodo: {}
};

const allStoreEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(todoReducer, initialState, allStoreEnhancer);
