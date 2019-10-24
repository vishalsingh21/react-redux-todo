import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { apiRequest, deleteTodo, editTodo } from "../actions/todoActions";
import Todo from "./Todo";
import TodoFilter from "./TodoFilter";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  handleEdit = id => {
    this.props.editTodo(id);
    this.props.history.push("/editTodo/" + id);
  };

  render() {
    const { todos } = this.props;
    const todoList = !todos.length ? (
      <div className="no-todo">No Todos</div>
    ) : (
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
          />
        ))}
      </ul>
    );

    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-3">
            <TodoFilter />
          </div>
          <div className="col-9">
            <div className="row todo-header align-items-center">
              <div className="col-8">
                <h4>Todo List</h4>
              </div>
              <div className="col-4 text-right">
                <Link className="button add-new" to="/addTodo">
                  Add New
                </Link>
              </div>
            </div>
            <div className="row todo-list">{todoList}</div>
          </div>
        </div>
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
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: id => dispatch(editTodo(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
