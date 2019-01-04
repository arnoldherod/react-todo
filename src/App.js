import React, { Component } from 'react';
import './App.css';
import NewTodo from './NewTodo.js'
import TodoItems from './TodoItems.js'
import Modal from 'react-responsive-modal'

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasksList: [],
      currentItem: {name: '', key: ''},
      taskInfo: {},
      editing: false
    };
  }
  handleInput = input => {
    const taskName = input.target.value
    const currentItem = {name: taskName, key: Date.now() }
    this.setState({
      currentItem
    })
  }
  handleEdit = input => {
    const editTask = input.target.value
    this.setState({taskInfo: {name: editTask, key: this.state.taskInfo.key} })
  }
  addItem = event => {
    event.preventDefault()
    const newItem = this.state.currentItem
    if( newItem.name !== '') {
      const tasks = [...this.state.tasksList, newItem]
      this.setState({
        tasksList: tasks,
        currentItem: {name: '' , key: ''}
      })
    }
  }
  deleteTask = key => {
    const filteredItems = this.state.tasksList.filter(item => {
      return item.key !== key
    })
    this.setState({
      tasksList: filteredItems
    })
  }
  updTask = task => {
    this.setState({taskInfo: task})
    this.setState({editing: true})
  }
  updTaskList = event => {
    event.preventDefault()
    this.onCloseModal()
    const newTaskList = this.state.tasksList.map(task => {
      if(task.key === this.state.taskInfo.key){
        task.name = this.state.taskInfo.name
      }
      return task
    })
    this.setState({items: newTaskList})
    this.setState({taskInfo: {}})
  }
  onCloseModal = () => {
    this.setState({editing: false})
  }
  render() {
    return (
      <div className="App">
        <NewTodo 
          addItem = {this.addItem}
          handleInput = {this.handleInput}
          currentItem = {this.state.currentItem} 
        />
        <TodoItems
          entries = {this.state.tasksList}
          deleteTask = {this.deleteTask}
          updTask = {this.updTask} />
        <Modal
          open = {this.state.editing}
          onClose={this.onCloseModal}
          closeOnOverlayClick = {true}
        >
        <form onSubmit = {this.updTaskList}>
          <input
            value = {this.state.taskInfo.name}
            onChange = {this.handleEdit}
          >  
          </input>
          <button type="submit"> Edit Task </button>
        </form>
        </Modal>
      </div>
    );
  }
}

export default App;
