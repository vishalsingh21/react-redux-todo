import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { apiRequest } from "../actions/todoActions";
import Todo from "./Todo";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

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
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch(apiRequest)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
