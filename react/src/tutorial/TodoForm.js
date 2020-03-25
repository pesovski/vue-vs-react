import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
    priority: "none"
  });

  function handleInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      //reset task input
      setTodo({ ...todo, task: "", priority: "none" });
    }
  }
  function handleSelectChange(e) {
    setTodo({ ...todo, priority: e.target.value });
  }

  return (
    <div className="w-50 m-auto">
      <form
        action=""
        onSubmit={handleSubmit}
        className="form-inline justify-content-center"
      >
        <div className="form-group form-check w-50">
          <input
            placeholder="Type your plans..."
            className="form-check-input p-3 mr-0 w-100 border border-primary"
            type="text"
            name="task"
            value={todo.task}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group w-25">
          <select
            className="form-control w-100 border border-primary border-left-0 rounded-0"
            style={{ height: 58 }}
            value={todo.priority}
            onChange={handleSelectChange}
          >
            <option hidden disabled value="none">
              Priority
            </option>
            <option className="font-weight-bolder text-success" value="low">
              Low
            </option>
            <option className="font-weight-bolder text-warning" value="medium">
              Medium
            </option>
            <option className="font-weight-bolder text-danger" value="high">
              High
            </option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary p-3 w-25 rounded-0">
          ADD
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
