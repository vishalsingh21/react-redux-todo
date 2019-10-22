import { FETCH_TODOS } from "../actions/actionTypes";
const initialState = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Go to market" },
  { id: 3, text: "Buy Icecream" }
];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS: {
      return state;
    }
    default:
      return state;
  }
};
