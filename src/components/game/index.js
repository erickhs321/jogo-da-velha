import React, { useState, useEffect } from 'react';
import Board from '../board';
import Button from '../button';
import Statistics from '../statistics';
import InformationBox from '../information-box';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './styles.css';


export default function Game() {
  const [showStatistics, setShowStatistics] = useState(false);
  const [winner, setWinner] = useState('');
  const [player1, setPlayer1] = useState('Jogador 1');
  const [player2, setPlayer2] = useState('Jogador 2');
  const [turn, setTurn] = useState(player1);


  function toggleShowStatistics() {
    setShowStatistics(!showStatistics);
  }

  function toggleTurn() {
    setTurn(turn === player1 ? player2 : player1)
  }

  function handleClick(i) {
    console.log(i)
  }

  function rafflePlayer() {
    const turn = Math.floor(Math.random() * 2) + 1
    setTurn(turn);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(turn === 1 ? player1 : player2)
        return squares[a];
      }
    }
    return null;
  }


  return (
    <>
      <div id="title">
        <Logo />
        <h1>Jogo da velha</h1>
      </div>
      <Board calculateWinner={calculateWinner} winner={winner} toggleTurn={toggleTurn} turn={turn} player1={player1} player2={player2} />
      <InformationBox winner={winner} turn={turn}/>
      <div id="buttons-container">
        <Button text="Jogar" />
        <Button text="Ver Estatísticas" onClick={setShowStatistics} />
      </div>
      <span id="change-players">Alterar Jogadores</span>
      {showStatistics && <Statistics toggleShowStatistics={toggleShowStatistics} />}
    </>
  )
}
