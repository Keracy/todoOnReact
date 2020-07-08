import React from "react";
import s from "./Todos.module.css";

const Todos = ({ showedTodos, deleteTodo, completedToggle }) => {
  const todoList = showedTodos.length ? (
    showedTodos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>
            <span
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              {todo.content}
            </span>
            <div
              onClick={() => {
                completedToggle(todo.id);
              }}
              className={s.complete + " right"}
            ></div>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no ToDos left,yay!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
