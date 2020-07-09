import React from "react";
import s from "./Todo.module.css";

const Todo = (props) => {
  return (
    <div className="collection-item">
      <span>
        <span
          onClick={() => {
            props.deleteTodo(props.todo.id);
          }}
        >
          {props.todo.content}
        </span>
        <div
          onClick={(event) => {
            event.target.classList.toggle(s.completed);
            props.completedToggle(props.todo.id);
          }}
          className={
            s.complete_check +
            " right " +
            (props.todo.completed ? "completed" : " ")
          }
        ></div>
      </span>
    </div>
  );
};

export default Todo;
