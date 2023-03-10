import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, completeTodo}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed": "list"}`}>{task.task}</p>
        <div>
            <button className="complete-btn">
                <FontAwesomeIcon icon={faCheck} onClick={() => completeTodo(task.id)}/>
            </button>
            <button className="trash-btn">
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
            </button>
        </div>
    </div>
  )
}