import { FILTER_CHANGED, Filters} from "../actions/actionTypes";

export const todoFilterInitialState = Filters.SHOW_ALL;

export const todoFilterReducer = (state = todoFilterInitialState, action) => {
  switch(action.type){
    case FILTER_CHANGED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
