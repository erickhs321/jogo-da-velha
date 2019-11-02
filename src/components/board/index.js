import React, { useState } from 'react';
import Square from '../square';
import Statistics from '../statistics';
import './styles.css';

export default function Board() {
  const [showStatistics, setShowStatistics] = useState(false);

  function toggleShowStatistics() {
    setShowStatistics(!showStatistics)
  }

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
          <span>Vez de: Jogador</span>
        </div>
        <div id="buttons-container">
          <button>Jogar Novamente</button>
          <button onClick={toggleShowStatistics}>Ver Estatísticas</button>
        </div>
        <span id="change-players">Alterar Jogadores</span>
      </div>

    { showStatistics && <Statistics toggleShowStatistics={toggleShowStatistics} /> }
    </>
  );
}
