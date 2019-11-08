import { COMPLETED_ALL } from "../actions/actionTypes"

export const todosInfoInitialState = false;

export const todosInfoReducer = (state = todosInfoInitialState, action) => {
    switch(action.payload){
        case COMPLETED_ALL: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}