import { SET_FILTER } from "../actions/actionTypes";

const initialState = "all";

export const todoFilterReducer = (state = initialState, action) => {
  if (action.type === SET_FILTER) {
    const newState = action.payload;
    return newState;
  }
  return state;
};
