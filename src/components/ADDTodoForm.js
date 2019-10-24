import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo, editTodo } from "../actions/todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      editing: false
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.editTodo(this.props.match.params.id);
      this.setState({
        todoText: this.props.todo.text,
        editing: true
      })
    }
  }

  handleChange = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.props.history.push("/");
  };

  render() {
    console.log("State", this.state);
    console.log("Props", this.props);
    return (
      <div>
        <Link className="button" to="/">
          Back To List
        </Link>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todoText}
            onChange={this.handleChange}
          />
          <button className="button" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.editTodo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    editTodo: id => dispatch(editTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
