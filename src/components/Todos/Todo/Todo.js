import React from "react";
import s from "./Todo.module.css";

const Todo = ({ completedToggle, deleteTodo, todo }) => {
  return (
    <div className="collection-item">
      <span>
        <span
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          {todo.content}
        </span>
        <div
          onClick={(event) => {
            event.target.classList.toggle(s.completed);
            completedToggle(todo.id);
          }}
          className={
            s.complete_check + " right " + (todo.completed ? s.completed : " ")
          }
        ></div>
      </span>
    </div>
  );
};

export default Todo;
