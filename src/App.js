import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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

  addTodo = (task) => {
    this.setState({
      todos: [...this.state.todos,
        {task, id: uuidv4(), completed: false}
      ]})
  }

  toggleItem = (idToToggle) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === idToToggle) {
          return {...item, completed: !item.completed}
        }
        return item
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    })
  }
  render() {
    return (
      <div>
        <h2>2Do or Not 2Do</h2>
        <h3>Yet Another To-Do App</h3>
        <TodoForm addTodo={addTodo} />
        <TodoList />
      </div>
    );
  }
} 

export default App;
