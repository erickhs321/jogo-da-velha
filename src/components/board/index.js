import React from 'react';
import Square from '../square'
import './styles.css'

export default function Board() {
  return (
    <div id="board">
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
  );
}
