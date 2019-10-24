import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/addTodo" component={TodoForm} />
          <Route path="/editTodo/:id" component={TodoForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
