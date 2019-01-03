import React, { Component } from 'react';
import './App.css';
import NewTodo from './NewTodo.js'
import TodoItems from './TodoItems.js'
import EditTask from './EditTask.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      currentItem: {name: '', key: ''},
      taskInfo: ''
    };
  }
  handleInput = input => {
    const taskName = input.target.value
    const currentItem = {name: taskName, key: Date.now() }
    this.setState({
      currentItem
    })
  }
  addItem = event => {
    event.preventDefault()
    const newItem = this.state.currentItem
    if( newItem.name !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {name: '' , key: ''}
      })
    }
  }
  deleteTask = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems
    })
  }
  // updTask = name => {
  //   this.state.taskInfo = name
  // }
  render() {
    return (
      <div className="App">
        <NewTodo 
          addItem = {this.addItem}
          handleInput = {this.handleInput}
          currentItem = {this.state.currentItem} 
        />
        <TodoItems
          entries = {this.state.items}
          deleteTask = {this.deleteTask}
          updTask = {this.updTask} />
        {/* <EditTask
          taskInfo = {this.state.taskInfo}
        /> */}
      </div>
    );
  }
}

export default App;
