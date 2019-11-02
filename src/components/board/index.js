import React, { useState } from 'react';
import Square from '../square';
import './styles.css';

export default function Board() {

  return (
    <>
      <div id="board-container">
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
        <div id="information-box">
          <span>Vez de:</span>
        </div>
        <span id="change-players">Alterar Jogadores</span>
      </div>
    </>
  );
}
