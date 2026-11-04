import {useState } from 'react'
import './App.css'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'

function App() {
   const [todoList, setTodoList] = useState([])

function App() {
   const [todoList, setTodoList] = useState([])
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
  
   function addTodo(todoTitle) {
     const newTodo = {
       id: Date.now(),
       title: todoTitle,
       isCompleted: false
       title: todoTitle
     };
     setTodoList(prevTodos => [...prevTodos, newTodo]);
   }

function completeTodo(id) {
  const updatedTodos = todoList.map(todo => {
    if (todo.id === id) {
      return { ...todo, isCompleted: true };
    }
    return todo;
  });
  setTodoList(updatedTodos);
}
   return (

        <div>
          <h1> Todo List </h1>
          <TodoForm 
           onAddTodo={addTodo} />

           <TodoList 
            todoList={todoList}
            onCompleteTodo={completeTodo}
           />
      
   return (

        <div>
          <h1>Todo List </h1>
          <TodoForm onAddTodo={addTodo} />
          <ul>
            {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
          </ul>
          <h1>Todo List</h1>
          <TodoForm />
          <TodoList />
          <TodoList todoList={todoList} />
        </div>
    
  )


}

export default App
