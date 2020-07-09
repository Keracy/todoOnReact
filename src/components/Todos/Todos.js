import React from "react";
import Todo from "./Todo/Todo";

const Todos = ({ completedToggle, filteredTodos, deleteTodo }) => {
  const todoList = filteredTodos.length ? (
    filteredTodos.map((todo) => {
      return (
        <Todo
          completedToggle={completedToggle}
          deleteTodo={deleteTodo}
          todo={todo}
          key={todo.id}
        ></Todo>
      );
    })
  ) : (
    <p className="center">You have no ToDos left,yay!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
