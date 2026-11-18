import {useState } from 'react'
import './App.css'
import Header from './shared/Header.jsx';
import TodosPage from './features/Todos/TodosPage.jsx';
import TodoForm from './features/TodoForm.jsx'
import TodoList from './features/TodoList/TodoList.jsx'
import Logon from './features/Logon.jsx';

function App() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [todoList, setTodoList] = useState([])
  
   function addTodo(todoTitle) {
     const newTodo = {
       id: Date.now(),
       title: todoTitle,
       isCompleted: false
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

function updateTodo(editedTodo) {
  const updatedTodos = todoList.map(todo => {
    if (todo.id === editedTodo.id) {
      return editedTodo;
    }
    return todo;
  });

  setTodoList(updatedTodos);
}

   return (

        <div>
           <Header />

      {token ? (
        <TodosPage token={token} />
      ) : (
        <Logon onSetEmail={setEmail} onSetToken={setToken} />
      )}
      
        </div>
    
  )


}

export default App
