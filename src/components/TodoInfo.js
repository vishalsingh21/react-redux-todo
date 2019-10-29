import React, { Component } from "react";
import { connect } from "react-redux";
import { completedAll } from "../actions/todoActions";

class TodoInfo extends Component {
  handleClick = e => {
    this.props.onCompletedAll(e.target.checked);
  };
  render() {
    const { todos } = this.props;
    const totalTodos = todos.length;
    const remainingTodos = todos.filter(t => t.completed === false).length;
    return (
      <div className="row todo-info">
        <div className="col-4">
          <input type="checkbox" onClick={this.handleClick} /> All Completed
        </div>
        <div className="col-4 text-center">
          Remaining Todo: {remainingTodos}
        </div>
        <div className="col-4 text-right">Total Todo: {totalTodos}</div>
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
    onCompletedAll: completed => dispatch(completedAll(completed))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInfo);
