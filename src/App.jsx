import {useState } from 'react'
import './App.css'
import TodoForm from './TodoForm.jsx'

function App() {
   const [todoList, setTodoList] = useState([])
  
   function addTodo(todoTitle) {
     const newTodo = {
       id: Date.now(),
       title: todoTitle
     };
     setTodoList(prevTodos => [...prevTodos, newTodo]);
   }

   return (

        <div>
          <h1>Todo List </h1>
          <TodoForm onAddTodo={addTodo} />
          <ul>
            {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
          </ul>
        </div>
    
  )
}

export default App
