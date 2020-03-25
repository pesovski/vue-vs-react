import React from "react";

export default function ListFilter({ filterTodos, processTodos }) {
  function deleteCompletedTodos(todos) {
    return todos.filter(todo => !todo.completed);
  }

  return (
    <div>
      <div className="w-50 m-auto d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterTodos(() => todo => true)}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => filterTodos(() => todo => todo.priority === "none")}
        >
          None
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => filterTodos(() => todo => todo.priority === "low")}
        >
          Low
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => filterTodos(() => todo => todo.priority === "medium")}
        >
          Medium
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => filterTodos(() => todo => todo.priority === "high")}
        >
          High
        </button>
      </div>
      <div className="w-50 m-auto d-flex justify-content-between py-2">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterTodos(() => todo => true)}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterTodos(() => todo => todo.completed === false)}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterTodos(() => todo => todo.completed === true)}
        >
          Completed
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            processTodos(() => todos => deleteCompletedTodos(todos))
          }
        >
          Delete Completed
        </button>
      </div>
    </div>
  );
}
