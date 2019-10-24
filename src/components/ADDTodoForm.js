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
    if(this.props.todo.id){
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
    if(this.state.editing){
      this.props.updateTodo({id: this.props.todo.id, text: this.state.todoText});
    } else {
      this.props.addTodo(this.state.todoText);
    }
    this.props.history.push("/");
  };

  render() {
    const buttonText = this.state.editing ? "Edit Todo": "Add Todo";
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
            {buttonText}
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
