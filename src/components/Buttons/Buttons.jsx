import React from "react";
import Button from "../Button/Button";

const Buttons = ({ showActive, showAll, showCompleted }) => {
  return (
    <div className="center-align">
      <Button content="All" clickHandler={showAll} />
      <Button content="Active" clickHandler={showActive} />
      <Button content="Completed" clickHandler={showCompleted} />
    </div>
  );
};

export default Buttons;
