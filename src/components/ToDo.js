import React from 'react'
import Delete from '../imgs/delete.svg'
import Edit from '../imgs/edit.svg'

function ToDo({task, deleteTask, editTodo}) {
  return (
    <div className='todo'>
        <p>{task.task}</p>
        <div className='todo-control'>
        <button onClick={()=> editTodo(task.id)}><img src={Edit}/></button>
        <button onClick={()=> deleteTask(task.id)}><img src={Delete}/></button>
        </div>
    </div>
  )
}

export default ToDo