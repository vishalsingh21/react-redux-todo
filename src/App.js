import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container my-3">
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route path="/addTodo" component={AddTodoForm} />
            <Route path="/editTodo/:id" component={EditTodoForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
