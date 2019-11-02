import React, { useState } from 'react';
import Square from '../square';
import './styles.css';

export default function Board({turn, player1, player2, onClick}) {

  function renderSquare(i) {
    return (
      <Square
        value={turn}
        position={i}
      />
    );
  }

  return (
    <>
      <div id="board-container">
        <div id="board">
          <div id="square-container">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <div id="information-box">
          <span>Vez de: {turn === 1 ? player1 : player2 }</span>
        </div>
      </div>
    </>
  );
}
