import React from 'react'
import { ToDoItems } from '../types/types'

interface Props{
  todo: ToDoItems;
  toggleComplete(id:number) : void;
}

export default function ToDoItem({todo, toggleComplete}: Props) {
  return (
    <>
      <li className={todo.completed ? 'completed' : ''}>
        <label>
          <input type='checkbox' defaultChecked={todo.completed} onChange={()=>toggleComplete(todo.id)}/>
          {todo.text}
        </label>
      </li>
    </>
  )
}
