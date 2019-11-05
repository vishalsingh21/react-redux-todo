import React, { Component } from "react";
import { connect } from "react-redux";
import { filterChanged } from "../actions/todoActions";
import { Filters } from '../actions/actionTypes';

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
              value={Filters.SHOW_ALL}
              checked={this.state.filter === Filters.SHOW_ALL ? true : false}
              onChange={this.handleChange}
            />
            <span>All</span>
          </li>
          <li>
            <input
              name="filter"
              type="radio"
              value={Filters.SHOW_ACTIVE}
              checked={this.state.filter === Filters.SHOW_ACTIVE ? true : false}
              onChange={this.handleChange}
            />
            <span>Active</span>
          </li>
          <li>
            <input
              name="filter"
              type="radio"
              value={Filters.SHOW_COMPLETED}
              checked={this.state.filter === Filters.SHOW_COMPLETED ? true : false}
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
