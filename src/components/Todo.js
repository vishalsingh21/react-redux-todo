import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/todoActions";

class Todo extends Component {
  handleChange = e => {
    this.props.onToggleTodo(this.props.todo, e.target.checked);
  };

  handleDelete = id => {
    this.props.onDelete(id);
  };

  render() {
    const { todo, onEdit } = this.props;
    
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
          onClick={this.handleDelete.bind(this, todo.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: (todo, completed) => dispatch(toggleTodo(todo, completed)),
    onDelete: id => dispatch(deleteTodo(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
