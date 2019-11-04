import React from 'react';
import './styles.css';

export default function Button({text, onClick}) {

  return (
    <button onClick={onClick}>{text}</button>
  );
}