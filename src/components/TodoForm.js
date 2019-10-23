import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

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
      //this.props.editTodo(id);
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
    editTodoTitle: state.editTodoTitle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
