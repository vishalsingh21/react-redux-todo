import React, { Component } from "react";
import { Link } from "react-router-dom";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Link to="/">Back To List</Link>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
