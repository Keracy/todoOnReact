import React from "react";

const InputText = ({ handleChange, label, content }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" onChange={handleChange} value={content} />
    </div>
  );
};

export default InputText;
