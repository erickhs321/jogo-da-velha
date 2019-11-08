import React from "react";
import "./styles.css";

export default function Input(props) {
  const { value, setValue, icon, placeholder } = props;

  return (
    <div id="input-container">
      {icon && <div>{icon}</div>}
      <input
        className={icon ? "have-icon" : ""}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}
