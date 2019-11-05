import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  FILTER_CHANGED,
  COMPLETED_ALL,
  Filters
} from "../actions/actionTypes";

export const initialState = {
  todos: [
    { id: 1, text: "Go to markert", completed: false },
    { id: 2, text: "Buy some fruits", completed: false },
    { id: 3, text: "Go to gym", completed: false }
  ],
  filter: Filters.SHOW_ALL,
  editTodo: {}
};

const getId = (() => {
  let id = 4;
  return () => id++;
})();

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case FILTER_CHANGED: {
      return { ...state, filter: action.payload };
    }

    case COMPLETED_ALL: {
      const todos = [...state.todos];
      todos.forEach(todo => {
        todo.completed = action.payload;
      });

      return { ...state, todos };
    }

    default:
      return state;
  }
};
