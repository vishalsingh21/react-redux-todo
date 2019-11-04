import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "../reducers/todoReducer";

export const initialState = {
  todos: [
    { id: 1, text: "Go to markert", completed: false },
    { id: 2, text: "Buy some fruits", completed: false },
    { id: 3, text: "Go to gym", completed: false }
  ],
  filter: "all",
  editTodo: {}
};

const allStoreEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(todoReducer, initialState, allStoreEnhancer);
