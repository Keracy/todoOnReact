import React, { useState } from "react";
import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import SearchTodo from "./components/SearchTodo/SearchTodo";
import Buttons from "./components/Buttons/Buttons";
import Header from "./components/Header/Header";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const showAll = () => {};

  const deleteTodo = (id) => {
    const allTodos = todos.filter((todo) => todo.id !== id);
    console.log(allTodos);
    setTodos(allTodos);
  };

  const completedToggle = (id) => {
    const allTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = todo.completed ? false : true;
        console.log(todo.completed);
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

  const filteredTodos = todos.filter(({ content }) =>
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
      <Buttons />
      <SearchTodo searchTodo={searchTodo} />
    </div>
  );
};

export default App;
