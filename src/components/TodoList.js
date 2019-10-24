import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { apiRequest, deleteTodo, editTodo } from "../actions/todoActions";
import Todo from "./Todo";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  handleDelete = (id) => {
    this.props.deleteTodo(id);
  }

  handleEdit = id => {
    this.props.editTodo(id);
    this.props.history.push('/editTodo/'+id);
  };

  render() {
    const { todos } = this.props;
    return (
      <div className="container my-3">
        <Link className="button" to="/addTodo">
          Add New{" "}
        </Link>
        <h3>Todo List</h3>
        {!todos.length && "No Todos"}
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} onDelete={this.handleDelete} onEdit={this.handleEdit} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch(apiRequest),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo: (id) => dispatch(editTodo(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
