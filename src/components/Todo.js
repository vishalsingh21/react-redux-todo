import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todoActions";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.todo.completed
    };
  }
  handleChange = e => {
    this.setState({
      completed: e.target.checked
    });
    this.props.toggleTodo(this.props.todo, e.target.checked);
  };
  render() {
    const { todo, onDelete, onEdit } = this.props;
    return (
      <li>
        <input
          id={todo.id}
          name="check"
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleChange}
        />
        <span>{todo.text}</span>
        <button className="button" onClick={onEdit.bind(this, todo.id)}>
          Edit
        </button>
        <button className="button" onClick={onDelete.bind(this, todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: (todo, completed) => dispatch(toggleTodo(todo, completed))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
