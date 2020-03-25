import React from "react";

function Todo({ todo, deleteTodo, toggleComplete }) {
  const priorityBorder =
    todo.priority === "low"
      ? "border border-success"
      : todo.priority === "medium"
      ? "border border-warning"
      : todo.priority === "high"
      ? "border border-danger"
      : "border border-primary";

  const priorityBackground =
    todo.priority === "low"
      ? "bg-success-light"
      : todo.priority === "medium"
      ? "bg-warning-light"
      : todo.priority === "high"
      ? "bg-danger-light"
      : "bg-primary-light";

  return (
    <div
      className={`d-flex justify-content-between align-items-center mb-1 p-2 bg-white ${priorityBorder}`}
    >
      <div className="custom-control custom-checkbox pl-5 w-100">
        <input
          className=" custom-control-input"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          id={todo.id}
        />
        <label
          htmlFor={todo.id}
          className={`custom-control-label pr-3 ${
            todo.completed ? "linethrough" : ""
          }`}
        >
          {todo.task}
        </label>
        <span
          className={`float-right px-2 mr-2 w-25 text-center ${priorityBorder} ${priorityBackground}`}
        >
          {todo.priority}
        </span>
      </div>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        x
      </button>
    </div>
  );
}

export default Todo;
