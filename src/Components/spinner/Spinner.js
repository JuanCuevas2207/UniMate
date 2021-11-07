import React from "react";
import spinnerStyles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={spinnerStyles.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
