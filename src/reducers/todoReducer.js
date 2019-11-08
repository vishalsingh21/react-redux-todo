import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  COMPLETED_ALL
} from "../actions/actionTypes";

export const todosInitialState = [
  { id: 1, text: "Go to markert", completed: false },
  { id: 2, text: "Buy some fruits", completed: false },
  { id: 3, text: "Go to gym", completed: false }
];

const getId = (() => {
  let id = 4;
  return () => id++;
})();

export const todoReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    case ADD_TODO: { 
      const todos = [...state];
      const newTodo = { id: getId(), text: action.payload, completed: false };
      todos.push(newTodo);
      return todos;
    }

    case DELETE_TODO: {
      const todos = state.filter(todo => todo.id !== action.payload);
      return todos;
    }

    case UPDATE_TODO: {
      const todos = [...state];
      const index = todos.findIndex(todo => todo.id === action.payload.id);
      todos[index] = { ...action.payload };
      return todos;
    }

    case TOGGLE_TODO: {
      const todos = [...state];
      const updatedTodos = todos.map(todo => {
          if(todo.id === action.payload){
            todo.completed = !todo.completed;
          }
          return todo;
      });
      /* const todo = todos.find(todo => todo.id === action.payload);
      const index = todos.indexOf(todo);
      todos[index] = { ...todo };
      todos[index].completed = action.payload.completed; */
      return updatedTodos;
    }

    case COMPLETED_ALL: {
      const todos = [...state];
      todos.forEach(todo => {
        todo.completed = action.payload;
      });
      return todos;
    }

    default:
      return state;
  }
};
