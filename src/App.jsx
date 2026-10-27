import { useState } from 'react'
import './App.css'
import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'

 const todos = [
        { id: 1, title: "Review React lesson" },
        { id: 2, title: "Practice JavaScript" },
        { id: 3, title: "Build Todo List" },
    ];

function App() {
  const [todoList, setTodoList] = useState(todos);
  return (
  
        <div>
          <h1>Todo List</h1>
          <TodoForm />
          <TodoList />
          <TodoList todoList={todoList} />
        </div>
    
  )
}

export default App
