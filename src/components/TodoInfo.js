import React, { Component } from "react";

class TodoInfo extends Component {

  componentDidMount() {
    console.log('componentDidMount: TodoInfo');
  }

  handleChange = e => {
    this.props.onCompletedAll(e.target.checked);
  };

  render() {
    const { todos } = this.props;
    const totalTodos = todos.length;
    const remainingTodos = todos.filter(t => t.completed === false).length;
    return (
      <div className="row todo-info">
        <div className="col-4">
          <input name="chaeckAll" type="checkbox" onChange={this.handleChange} checked={this.props.completedAll} /> All Completed
        </div>
        <div className="col-4 text-center">
          Remaining Todo: {remainingTodos}
        </div>
        <div className="col-4 text-right">Total Todo: {totalTodos}</div>
      </div>
    );
  }
}

export default TodoInfo;
