import React, { Component } from "react";

export default class TodoList extends Component {
  handleClear = (e) => {
    e.preventDefault();
    this.props.clearCompleted();
  };

  render() {
    return (
      <>
        {this.props.todos.map((item) => {
          return <Todo item={item} toggleItem={this.props.toggleItem} />;
        })}
        <button onClick={this.handleClear}>remove completed</button>
      </>
    );
  }
}
