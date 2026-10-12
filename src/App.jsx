import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
    const todoList = [
  { id: 1, title: "Review React lesson" },
  { id: 2, title: "Practice JavaScript" },
  { id: 3, title: "Build Todo List" },
]

  return (
  
        <div>
          <h1>Todo List</h1>
          <ul>
  {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
</ul>
        </div>
    
  )
}

export default App
