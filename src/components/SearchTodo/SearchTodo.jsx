import React from "react";
import InputText from "../InputText/InputText";

const SearchTodo = (props) => {
  return (
    <div>
      <InputText
        label="Search for Todo"
        handleChange={(event) => {
          props.searchTodo(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchTodo;
