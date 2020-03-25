import React from "react";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul className="list-unstyled py-3 w-50 m-auto">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
