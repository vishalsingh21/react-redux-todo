import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  FILTER_CHANGED,
  COMPLETED_ALL
} from "./actionTypes";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const editTodo = id => {
  return {
    type: EDIT_TODO,
    payload: id
  };
};

export const updateTodo = todo => {
  return {
    type: UPDATE_TODO,
    payload: todo
  };
};

export const toggleTodo = (todo, completed) => {
  return {
    type: TOGGLE_TODO,
    payload: { todo, completed }
  };
};

export const filterChanged = filter => {
  return {
    type: FILTER_CHANGED,
    payload: filter
  };
};

export const completedAll = completed => {
  return {
    type: COMPLETED_ALL,
    payload: completed
  };
};
