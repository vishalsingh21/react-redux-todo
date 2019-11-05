import { FILTER_CHANGED, Filters} from "../actions/actionTypes";


export const todoFilterReducer = (state = Filters.SHOW_ALL, action) => {
  switch(action.type){
    case FILTER_CHANGED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
