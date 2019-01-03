import React from 'react'

function EditTask(props){
  return (
    <form onSubmit = {props.editItem}>
      <input
        placeholder = {props.taskInfo}
        value={this.props.currentItem.name}
      />
      <button type="submit"> Edit Task </button>
    </form> 
  )
}
export default EditTask