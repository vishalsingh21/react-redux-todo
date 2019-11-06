import { EDIT_TODO, RESET_EDIT_TODO } from "../actions/actionTypes";

export const editTodoInitalState = {};

export const editTodoReducer = (state = editTodoInitalState, action) => {
  switch(action.type){
    case EDIT_TODO: {
      return action.payload;
    }
    case RESET_EDIT_TODO: {
      return editTodoInitalState;
    }
    default: {
      return state;
    }
  }  
};
