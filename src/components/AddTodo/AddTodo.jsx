import React, { useState } from "react";
import InputText from "../InputText/InputText";

const AddTodo = (props) => {
  const [content, setContent] = useState("");
  const handleChange = (event) => {
    setContent(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim()) {
      props.addTodo(content);
      setContent("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputText
          handleChange={handleChange}
          label="Add new Todo"
          content={content}
        />
      </form>
    </div>
  );
};

export default AddTodo;
