import React, { Component } from "react";

class Todo extends Component {
  
  render() {
    const { todo, onDelete, onEdit } = this.props;
    return (
      <li>
        {todo.text}
        <button
          className="button"
          onClick={onEdit.bind(this, todo.id)}
         >Edit</button>
        <button
          className="button"
          onClick={onDelete.bind(this, todo.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default Todo;
