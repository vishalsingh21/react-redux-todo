import React, { Component } from "react";

class Todo extends Component {

  handleChange = e => {
    this.props.onToggle(this.props.todo.id);
  }
  
  render() {
    const { todo, onEdit, onDelete } = this.props;
    return (
      <li>
        <input
          id={todo.id}
          name="check"
          type="checkbox"
          checked={todo.completed}
          onChange={this.handleChange}
        />
        <label htmlFor={todo.id}>{todo.text}</label>
        <button className="button" onClick={onEdit.bind(this, todo)}>
          Edit
        </button>
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