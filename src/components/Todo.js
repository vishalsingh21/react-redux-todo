import React from "react";

function Todo(props) {
  const { todo } = props;
  return <li>{todo.text}</li>;
}

export default Todo;
