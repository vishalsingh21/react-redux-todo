import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../actions/todoActions";
import Todo from "./Todo";
import TodoFilter from "./TodoFilter";
import TodoInfo from "./TodoInfo";

class TodoList extends Component {
  handleEdit = id => {
    this.props.onEditTodo(id);
    this.props.history.push("/editTodo/" + id);
  };

  getFilteredTodos = () => {
    if (this.props.filter === "active") {
      return this.props.todos.filter(t => !t.completed);
    } else if (this.props.filter === "completed") {
      return this.props.todos.filter(t => t.completed);
    } else {
      return this.props.todos;
    }
  };

  render() {
    const filteredTodos = this.getFilteredTodos();
    const todoList = !filteredTodos.length ? (
      <div className="no-todo">No Todos</div>
    ) : (
      <ul>
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            completed={todo.completed}
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
            <div className="row todo-list">
              <div className="col-12">{todoList}</div>
            </div>
            <TodoInfo />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteTodo: id => dispatch(deleteTodo(id)),
    onEditTodo: id => dispatch(editTodo(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
