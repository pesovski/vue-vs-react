import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./tutorial/TodoForm";
import TodoList from "./tutorial/TodoList";
import Header from "./tutorial/Header";
import SubHeader from "./tutorial/SubHeader";
import ListFilter from "./tutorial/ListFilter";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );
  const [appliedFilterFunc, setAppliedFilterFunc] = useState(() => todo =>
    true
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  // function deleteTodos() {
  //   setTodos(todos.filter(todo => todo.completed === false));
  // }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  const filteredTodos = todos.filter(appliedFilterFunc);
  return (
    <div className="App container w-75 my-5">
      <Header />
      <SubHeader
        countTodo={filteredTodos.filter(todo => todo.completed === false)}
      />
      <TodoForm addTodo={todo => setTodos([todo, ...todos])} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
      <ListFilter
        filterTodos={listFilterFunc => setAppliedFilterFunc(listFilterFunc)}
        processTodos={processTodosFunc => setTodos(processTodosFunc(todos))}
      />
    </div>
  );
}

export default App;
