import React from "react";
import Button from "../Button/Button";

const Buttons = () => {
  return (
    <div className="center-align">
      <Button content="All" />
      <Button content="Active" />
      <Button content="Completed" />
    </div>
  );
};

export default Buttons;
