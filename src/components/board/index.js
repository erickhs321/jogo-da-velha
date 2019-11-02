import React from 'react';
import Square from '../square';
import Button from '../button'
import './styles.css'
export default function Board() {
  return (
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
        <span>Vez de: Jogador</span>
      </div>
      <div id="button-container">
        <Button text="Jogar Novamente" />
        <Button text="Ver Estatísticas" />
      </div>
    </div>
  );
}
