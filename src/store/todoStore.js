import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";

import { todosInitialState } from "../reducers/todoReducer";
import { todoFilterInitialState } from "../reducers/todoFilterReducer";
import { editTodoInitalState } from "../reducers/editTodoReducer";

const appInitialState = {
  todos: todosInitialState,
  filter: todoFilterInitialState,
  editTodo: editTodoInitalState
}

const allStoreEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, appInitialState, allStoreEnhancer);
