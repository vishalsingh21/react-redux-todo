import React, { Component } from "react";
import { connect } from "react-redux";
import { filterChanged } from "../actions/todoActions";

class TodoFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: props.filter
    };
  }

  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
    this.props.onFilterChanged(e.target.value);
  };
  render() {
    return (
      <div className="filter-container">
        <h4>Filter</h4>
        <ul className="filters">
          <li>
            <input
              name="filter"
              type="radio"
              value="all"
              checked={this.state.filter === "all" ? true : false}
              onChange={this.handleChange}
            />
            <span>All</span>
          </li>
          <li>
            <input
              name="filter"
              type="radio"
              value="active"
              checked={this.state.filter === "active" ? true : false}
              onChange={this.handleChange}
            />
            <span>Active</span>
          </li>
          <li>
            <input
              name="filter"
              type="radio"
              value="completed"
              checked={this.state.filter === "completed" ? true : false}
              onChange={this.handleChange}
            />
            <span>Completed</span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterChanged: filter => {
      dispatch(filterChanged(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter);
