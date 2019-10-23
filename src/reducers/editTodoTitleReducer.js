import { EDIT_TODO } from "../actions/actionTypes";

const initialState = "";

export const editTodoTitleReducer = (state = initialState, action) => {
  if (action.type === EDIT_TODO) {
    const newState = action.payload;
    return newState;
  }
  return state;
};
