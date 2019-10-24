import React, { Component } from "react";

class TodoFilter extends Component {
  render() {
    return (
      <div className="filter-container">
        <h4>Filter</h4>
        <ul className="filters">
          <li>
            <input name="filter" type="radio" />
            <span>All</span>
          </li>
          <li>
            <input name="filter" type="radio" />
            <span>Active</span>
          </li>
          <li>
            <input name="filter" type="radio" />
            <span>Completed</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoFilter;
