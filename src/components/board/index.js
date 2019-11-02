import React, { useState } from 'react';
import Square from '../square';
import './styles.css';

export default function Board({turn, player1, player2}) {

  return (
    <>
      <div id="board-container">
        <div id="board">
          <div id="square-container">
            <Square turn={turn}/>
            <Square turn={turn}/>
            <Square turn={turn}/>
            <Square turn={turn}/>
            <Square turn={turn}/>
            <Square turn={turn}/>
            <Square turn={turn}/>
            <Square turn={turn}/>
            <Square turn={turn}/>
          </div>
        </div>
        <div id="information-box">
          <span>Vez de: {turn === 1 ? player1 : player2 }</span>
        </div>
      </div>
    </>
  );
}
