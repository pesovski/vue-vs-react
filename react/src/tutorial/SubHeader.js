import React from "react";

export default function SubHeader({ countTodo }) {
  return (
    <div>
      <h3 className="text-center">
        You have {countTodo.length} unfinished tasks.
      </h3>
    </div>
  );
}
