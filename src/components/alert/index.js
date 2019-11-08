import React from "react";
import "./styles.css";

export default function Alert(props) {
  const { message, type } = props;

  console.log(type);

  return (
    <div id="alert">
      <span className={type}>{message}</span>
    </div>
  );
}
