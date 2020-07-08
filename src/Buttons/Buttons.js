import React, { Component } from "react";
import s from "./Buttons.module.css";

class Buttons extends Component {
  render() {
    return (
      <div className="center-align">
        <button className={s.button + " waves-effect waves-light btn"}>
          All
        </button>
        <button className={s.button + " waves-effect waves-light btn"}>
          Active
        </button>
        <button className={s.button + " waves-effect waves-light btn"}>
          Completed
        </button>
      </div>
    );
  }
}

export default Buttons;
