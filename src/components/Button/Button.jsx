import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.clickHandler}
      className={s.button + " waves-effect waves-light btn"}
    >
      {props.content}
    </button>
  );
};

export default Button;
