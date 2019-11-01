import React from 'react';
import Square from '../square'
import './styles.css'

export default function Board() {
  return (
    <div id="board">
      <div id="square-container">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
