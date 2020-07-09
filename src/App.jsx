import React, { useState } from "react";
import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import SearchTodo from "./components/SearchTodo/SearchTodo";
import Buttons from "./components/Buttons/Buttons";
import Header from "./components/Header/Header";

const App = () => {
  const [todos, setTodos] = useState([]);
  let filteredTodos = [...todos];
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const showAll = () => {
    setActive(false);
    setCompleted(false);
  };
  const showCompleted = () => {
    setActive(false);
    setCompleted(true);
  };
  const showActive = () => {
    setActive(true);
    setCompleted(false);
  };
  const deleteTodo = (id) => {
    const allTodos = todos.filter((todo) => todo.id !== id);
    console.log(allTodos);
    setTodos(allTodos);
  };

  const completedToggle = (id) => {
    const allTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = todo.completed ? false : true;
        return todo;
      }
      return todo;
    });
    setTodos(allTodos);
  };

  const addTodo = (value) => {
    let todo = { content: value };
    todo.id = Math.random();
    todo.completed = false;
    const allTodos = [...todos, todo];
    setTodos(allTodos);
  };

  const searchTodo = (value) => {
    setSearchWord(value);
  };

  filteredTodos = todos
    .filter((todo) =>
      active ? !todo.completed : completed ? todo.completed : true
    )
    .filter(({ content }) =>
      content.toLowerCase().includes(searchWord.toLowerCase())
    );
  return (
    <div className="todo-app container">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos
        completedToggle={completedToggle}
        filteredTodos={filteredTodos}
        deleteTodo={deleteTodo}
      />
      <Buttons
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
      />
      <SearchTodo searchTodo={searchTodo} />
    </div>
  );
};

export default App;
