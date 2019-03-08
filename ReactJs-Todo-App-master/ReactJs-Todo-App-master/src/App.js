import React, { Component } from 'react';
import Todo from './Todo.js'
import TodoAdd from './TodoAdd'
class App extends Component {
  state = {
    todos: [
      { id: 1, item: 'Play Badminton' },
      { id: 2, item: 'Evaluate Assignments' }
    ]
  }
  //filter is a method of array
  //=> auto-bind the context
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  addTask = (task) => {
    // console.log(task)
    task.id = Math.random()
    let todos = [...this.state.todos, task]
    // console.log(todos)
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="App container">
        <h3 className="center blue-text">My Todo's</h3>
        <TodoAdd addTask={this.addTask} />
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
export default App;

  //we use props for communication
  //js has two return values for ternery operator truthy,falsy
//falsy: 0,' ',null,undefined,false