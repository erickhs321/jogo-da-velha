import React from "react";
import "./styles.css";

export default function Button(props) {
  const { text, onClick, disabled } = props;

  return (
    <button id="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
