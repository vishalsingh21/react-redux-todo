import { EDIT_TODO } from "../actions/actionTypes";

export const editTodoTitleReducer = (state = {}, action) => {
  switch(action.type){
    case EDIT_TODO: {
      return action.payload;
    }
    default: {
      return state;
    }
  }  
};
