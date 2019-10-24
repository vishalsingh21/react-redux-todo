import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../actions/todoActions";

class Todo extends Component {
  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  handleEdit = id => {
    this.props.editTodo(id);
    this.props.history.push('/editTodo/'+id);
  };

  render() {
    const { todo } = this.props;
    return (
      <li>
        {todo.text}
        <Link
          className="button"
          to={"/editTodo/"+todo.id}
         >Edit</Link>
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
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: id => dispatch(editTodo(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
