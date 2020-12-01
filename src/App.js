import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialTodos = [
  {
    task: "Organize Garage",
    id: uuidv4(),
    completed: false,
  },
  {
    task: "Run with the bulls",
    id: uuidv4(),
    completed: false,
  },
  {
    task: "Existential Panic",
    id: uuidv4(),
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: uuidv4(),
    completed: false,
  },
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: initialTodos
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do or Not To Do</h2>
      </div>
    );
  }
} 

export default App;
