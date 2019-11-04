import React from 'react';
import './styles.css';

export default function Button({text, onClick, disabled}) {

  return (
    <button onClick={onClick} disabled={disabled}>{text}</button>
  );
}
