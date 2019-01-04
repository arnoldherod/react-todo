import React from 'react'
// import React, { Component } from 'react'
// class TodoItems extends Component{
//   render(){
//     const todoTasks = this.props.entries
//     return (
//       <ul className="theList">
//         {todoTasks.map(task => (
//           <li key={task.key} onClick={() => this.props.deleteItem(task.key)}>{task.name}</li>
//         ))}  
//       </ul>
//     )
//   }
// }

function TodoItems(props){
  const todoTasks = props.entries
  return (
    <ul className="theList">
      {todoTasks.map(task => (
        <li key={task.key}>
          {task.name}
          <button onClick={() => props.deleteTask(task.key)}> Delete </button>
          <button onClick={() => props.updTask(task)}> Update </button>
        </li>
      ))}  
    </ul>
  )
}

export default TodoItems