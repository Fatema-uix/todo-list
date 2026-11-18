import { useEffect, useState } from 'react';
import TodoForm from '../TodoForm.jsx';
import TodoList from '../TodoList/TodoList.jsx';


function TodosPage({ token }) {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState('');
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);

  useEffect(() => {
  async function fetchTodos() {
    setIsTodoListLoading(true);
    setError('');

    try {
      const response = await fetch('/api/tasks?page=0&limit=99', {
        headers: {
          'X-CSRF-TOKEN': token,
        },
        credentials: 'include',
      });

      const data = await response.json();

      if (response.status === 401) {
        throw new Error('Unauthorized. Please log in again.');
      }

      if (!response.ok) {
        throw new Error('Failed to fetch todos.');
      }

      setTodoList(data.tasks);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsTodoListLoading(false);
    }
  }

  if (token) {
    fetchTodos();
  }
}, [token]);


async function addTodo(todoTitle) {
  const newTodo = {
    id: Date.now(),
    title: todoTitle,
    isCompleted: false,
  };

  setTodoList((prevTodos) => [...prevTodos, newTodo]);
   try {
    const response = await fetch('/api/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token,
  },
  credentials: 'include',
  body: JSON.stringify({
    title: todoTitle,
    isCompleted: false,
  }),
});
 const data = await response.json();
 if (!response.ok) {
  throw new Error('Failed to add todo.');
}
setTodoList((prevTodos) =>
  prevTodos.map((todo) =>
    todo.id === newTodo.id ? data : todo
  )
);

  } catch (error) {
setTodoList((prevTodos) =>
  prevTodos.filter((todo) => todo.id !== newTodo.id)

);
setError(error.message);
  }

}

async function completeTodo(id) {
  const originalTodos = [...todoList];
  const updatedTodos = todoList.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isCompleted: true };
    }
    return todo;
  });

  setTodoList(updatedTodos);
  try {
const response = await fetch(`/api/tasks/${id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token,
  },
  credentials: 'include',
  body: JSON.stringify({
    isCompleted: true,
  }),
}); 

if (!response.ok) {
  throw new Error('Failed to complete todo.');
}
} catch (error) {
setTodoList(originalTodos);
setError(error.message);
}
}


async function updateTodo(editedTodo) {
  const originalTodos = [...todoList];
  const updatedTodos = todoList.map((todo) => {
    if (todo.id === editedTodo.id) {
      return editedTodo;
    }
    return todo;
  });

  setTodoList(updatedTodos);
  try {
    const response = await fetch(`/api/tasks/${editedTodo.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token,
  },
  credentials: 'include',
  body: JSON.stringify({
    title: editedTodo.title,
    isCompleted: editedTodo.isCompleted,
  }),
});
if (!response.ok) {
  throw new Error('Failed to update todo.');
}
} catch (error) {
setTodoList(originalTodos);
setError(error.message);
}
}
  return (
    <div>
    {isTodoListLoading && <p>Loading todos...</p>}
    {error && (
  <div role="alert">
    <p>{error}</p>
    <button onClick={() => setError('')}>
  Clear Error
</button>
  </div>
)}
    <TodoForm onAddTodo={addTodo} />

<TodoList
  todoList={todoList}
  onCompleteTodo={completeTodo}
  onUpdateTodo={updateTodo}
/>
      {/* We'll add the todo functions and components here next. */}
    </div>
  );
}
export default TodosPage;