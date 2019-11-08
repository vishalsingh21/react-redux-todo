import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editTodo, completedAll } from "../actions/todoActions";
import { Filters } from '../actions/actionTypes';
import Todo from "./Todo";
import TodoFilter from "./TodoFilter";
import TodoInfo from "./TodoInfo";

class TodoList extends Component {
  handleEdit = todo => {
    this.props.onEditTodo(todo);
    this.props.history.push("/editTodo/" + todo.id);
  };

  handleCompletedAll = completed => {
    this.props.onCheckAll(completed);
  }

  getFilteredTodos = () => {
    if (this.props.filter === Filters.SHOW_ACTIVE) {
      return this.props.todos.filter(todo => !todo.completed);
    } else if (this.props.filter === Filters.SHOW_COMPLETED) {
      return this.props.todos.filter(todo => todo.completed);
    } else {
      return this.props.todos;
    }
  };

  isCompletedAll = () => {
    const todos = [...this.props.todos];
    let flag = todos.every(todo => todo.completed);
    return flag;
  }

  componentDidMount(){
    console.log('componentDidMount: TodoList');
  }

  render() {
    const filteredTodos = this.getFilteredTodos();
    console.log(filteredTodos);
    const todoList = !filteredTodos.length ? (
      <div className="no-todo">No Todos</div>
    ) : (
      <ul>
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
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
            <TodoInfo todos={this.props.todos} completedAll={this.isCompletedAll()} onCompletedAll={this.handleCompletedAll} />
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
    onEditTodo: id => dispatch(editTodo(id)),
    onCheckAll: completed => dispatch(completedAll(completed))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
