import { useRef, useState } from 'react'

function TodoForm({ onAddTodo }) {
    const inputRef = useRef()
const [workingTodoTitle, setWorkingTodoTitle] = useState('')
    const handleAddTodo = (event) => {
        event.preventDefault()
        const todoTitle = workingTodoTitle.trim()
       
        if (todoTitle) {
            onAddTodo(todoTitle) 
            setWorkingTodoTitle('')
import {useRef} from 'react'

function TodoForm({ onAddTodo }) {
    const inputRef = useRef()

    const handleAddTodo = (event) => {
        event.preventDefault()
        const todoTitle = event.target.todoTitle.value.trim()
       
        if (todoTitle) {
            onAddTodo(todoTitle) 
            event.target.reset()
            inputRef.current.focus()
        }
    }
   
   
   return(
   <form onSubmit={handleAddTodo}>
   <label htmlFor="todoTitle">Todo</label>
<input
ref={inputRef}
type="text"
id="todoTitle"
name="todoTitle"
placeholder="Todo text"
value={workingTodoTitle}
onChange={(event) => setWorkingTodoTitle(event.target.value)}
required
/>

<button
 type="submit"
 disabled={!workingTodoTitle.trim()}
 >Add Todo  
 </button>
required
/>

<button type="submit">Add Todo</button>
</form>
)
}

export default TodoForm
export default TodoForm
import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(todoTitle)
    setTodoTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoTitle">Todo </label>
      <input
        type="text"
        id="todoTitle"
        value={todoTitle}
        onChange={(event) => setTodoTitle(event.target.value)}
      />
      <button type="submit" disabled={!todoTitle.trim()}>
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm
