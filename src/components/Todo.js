import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  handleToggle = () => {
    this.props.toggleItem(this.props.item.id);
  };
  render() {
    return (
      <div
        onClick={this.handleToggle}
        className={this.props.item.complete ? "completed" : ""}
      >
        {this.props.item.name}
      </div>
    );
  }
}
export default Todo;
