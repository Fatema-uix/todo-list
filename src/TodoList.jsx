function TodoList() {

    const todoList = [
        { id: 1, title: "Review React lesson" },
        { id: 2, title: "Practice JavaScript" },
        { id: 3, title: "Build Todo List" },
    ];

    return ( 
        <>
          <ul>
            {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
          </ul>
        </>
    );
}

export default TodoList;