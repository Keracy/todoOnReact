import React, { Component } from "react";
import Todos from "./Todos/Todos";
import AddTodo from "./AddTodo/AddTodo";
import SearchTodo from "./SearchTodo/SearchTodo";
import Buttons from "./Buttons/Buttons";

class App extends Component {
  state = {
    showedTodos: [],
    allTodos: [],
  };
  deleteTodo = (id) => {
    const allTodos = this.state.allTodos.filter((todo) => todo.id !== id);
    const showedTodos = this.state.showedTodos.filter((todo) => todo.id !== id);
    this.setState({
      allTodos: allTodos,
      showedTodos: showedTodos,
    });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    const allTodos = [...this.state.allTodos, todo];
    const showedTodos = [...this.state.showedTodos, todo];
    this.setState({
      allTodos: allTodos,
      showedTodos: showedTodos,
    });
  };
  searchTodo = (value) => {
    let allTodos = [...this.state.allTodos];
    this.setState({
      showedTodos: allTodos.filter((todo) =>
        todo.content.toLowerCase().includes(value.toLowerCase())
      ),
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          deleteTodo={this.deleteTodo}
          showedTodos={this.state.showedTodos}
        />
        <Buttons />
        <SearchTodo searchTodo={this.searchTodo} />
      </div>
    );
  }
}

export default App;
