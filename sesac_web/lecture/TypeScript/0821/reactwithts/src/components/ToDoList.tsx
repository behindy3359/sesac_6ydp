import React from 'react'
import ToDoItem from './ToDoItem'
import { ToDoItems } from '../types/types'
import '../styles/todoList.scss'

export default function ToDoList() {
  const [todos, setTodos] = React.useState<ToDoItems[]>([]);
  const [newTodo, setNewTodo] = React.useState<string>('');
  
  const inputRef = React.useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updatedTodos = [ ...todos, {id: Date.now() , text: newTodo, completed : false}]
    setTodos(updatedTodos);
    setNewTodo('');
  }
  const setNewTodoByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key ==='Enter'){
      addTodo();
    }
  }

  const focusInput = () => {
    inputRef.current?.focus();
  }

  const toggleComplete = (targetId :number) => {
    const updatedTodos = todos.map((todo)=>{
      return todo.id === targetId ?{ ...todo, completed : !todo.completed } : todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <>
      <div>
        <h1>TodoList</h1>
        <div>
          <input type='text' 
            ref={inputRef} 
            value={newTodo} 
            placeholder='새로운 할 일을 추가해 주세요' 
            onChange={(e)=>setNewTodo(e.target.value)} onKeyDown={(e)=>setNewTodoByEnter(e)}/>
          <button onClick={addTodo}>ADD</button>
          <button onClick={focusInput}>FOCUS</button>
        </div>
        <hr/>
        <ul>
          {todos.map((todo)=>(<ToDoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />))}
        </ul>
      </div>
    </>
  )
}
