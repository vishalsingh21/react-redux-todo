import { FETCH_TODOS, ADD_TODO, DELETE_TODO } from "../actions/actionTypes";

const initialState = {
  todos: [],
  filter: "all",
  editTodoTitle: ""
};

const getId = (() => {
  let id = 1;
  return () => id++;
})();

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS: {
      console.log(state);
      return state;
    }

    case ADD_TODO: {
      const todos = [...state.todos];
      const newTodo = { id: getId(), text: action.payload };
      todos.push(newTodo);
      return { ...state, todos };
    }

    case DELETE_TODO: {
      const todos = state.todos.filter(todo => todo.id !== action.payload);
      return { ...state, todos };
    }

    default:
      return state;
  }
};
