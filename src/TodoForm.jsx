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
