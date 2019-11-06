import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo, updateTodo, resetEditTodo } from "../actions/todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      editing: false
    };
  }

  componentDidMount() {
    if (this.props.todo.id) {
      this.setState({
        todoText: this.props.todo.text,
        editing: true
      });
    }
  }

  handleChange = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.editing) {
      this.props.onUpdateTodo({
        id: this.props.todo.id,
        text: this.state.todoText,
        completed: this.props.todo.completed
      });
      this.props.onResetEditTodo();
    } else {
      this.props.onAddTodo(this.state.todoText);
    }
    this.props.history.push("/");
  };

  render() {
    const buttonText = this.state.editing ? "Edit Todo" : "Add Todo";
    return (
      <div className="container my-3">
        <div className="row todo-header align-items-center">
          <div className="col-8">
            <h4>Add New Todo</h4>
          </div>
          <div className="col-4 text-right">
            <Link className="button" to="/">
              Back To List
            </Link>
          </div>
        </div>
        <div className="row todo-form">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.todoText}
                onChange={this.handleChange}
              />
              <button className="button" type="submit">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todo: state.editTodo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: todo => dispatch(addTodo(todo)),
    onUpdateTodo: todo => dispatch(updateTodo(todo)),
    onResetEditTodo: () => dispatch(resetEditTodo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
