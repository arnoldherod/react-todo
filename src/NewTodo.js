import React, { Component } from 'react'

class newTodo extends Component {
  render() {
    return (
      <div className="header">
        <form onSubmit={this.props.addItem}>
          <input
            placeholder="Task"
            value={this.props.currentItem.name}
            onChange={this.props.handleInput}
          />
          <button type="submit"> Add Task </button>
        </form>
      </div>
    )
  }
}

export default newTodo