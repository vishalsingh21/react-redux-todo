import {
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  TOGGLE_TODO
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  filter: "all",
  editTodo: {}
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
      const newTodo = { id: getId(), text: action.payload, completed: false };
      todos.push(newTodo);
      return { ...state, todos };
    }

    case DELETE_TODO: {
      const todos = state.todos.filter(todo => todo.id !== action.payload);
      return { ...state, todos };
    }

    case EDIT_TODO: {
      const editTodo = state.todos.find(todo => todo.id === action.payload);
      return { ...state, editTodo };
    }

    case UPDATE_TODO: {
      const todos = [...state.todos];
      const index = todos.findIndex(todo => todo.id === action.payload.id);
      todos[index] = { ...action.payload };
      return { ...state, todos, editTodo: {} };
    }

    case TOGGLE_TODO: {
      const todos = [...state.todos];
      const index = todos.indexOf(action.payload.todo);
      todos[index] = { ...action.payload.todo };
      todos[index].completed = action.payload.completed;
      return { ...state, todos };
    }

    default:
      return state;
  }
};
