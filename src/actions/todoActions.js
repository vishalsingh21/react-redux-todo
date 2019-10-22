import { FETCH_TODOS, ADD_TODO } from "./actionTypes";

export const addTodo = () => {
  return {
    type: ADD_TODO
  };
};

export const apiRequest = () => {
  return {
    type: FETCH_TODOS
  };
};
