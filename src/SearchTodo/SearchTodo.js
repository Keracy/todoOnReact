import React, { Component } from "react";

export default class SearchTodo extends Component {
  state = {
    content: "",
  };
  searcher = (event) => {
    this.props.searchTodo(event.target.value);
  };
  render() {
    return (
      <div>
        <label>Search for Todo</label>
        <input type="text" onChange={this.searcher} />
      </div>
    );
  }
}
