import React, { Component } from "react";
import { connect } from "react-redux";
import { apiRequest } from "../actions/todoActions";
import Todo from "./Todo";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  handleAddNew = () => {
    this.props.history.push("/addTodo");
  };

  render() {
    const { todos } = this.props;
    return (
      <div className="container my-3">
        <button onClick={this.handleAddNew}>Add New</button>
        <h3>Todo List</h3>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
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
    fetchTodos: () => dispatch(apiRequest)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
