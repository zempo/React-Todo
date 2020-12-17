import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      item: "",
    };
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.item);
    this.setState({ item: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button type='submit'>Add Item</button>
      </form>
    );
  }
}
