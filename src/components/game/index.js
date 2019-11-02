import React, { useState, useEffect } from 'react';
import Board from '../board';
import Button from '../button';
import Statistics from '../statistics';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './styles.css';


export default function Game() {
  const [showStatistics, setShowStatistics] = useState(false);
  const [turn, setTurn] = useState();
  const [player1, setPlayer1] = useState('Jogador 1');
  const [player2, setPlayer2] = useState('Jogador 2');

  useEffect(() => {
    rafflePlayer();
  });

  function toggleShowStatistics() {
    setShowStatistics(!showStatistics);
  }

  function rafflePlayer() {
    const turn = Math.floor(Math.random() * 2) + 1
    setTurn(turn);
  }

  return (
    <>
    <div id="title">
      <Logo />
      <h1>Jogo da velha</h1>
    </div>
      <Board turn={turn} player1={player1} player2={player2} />
      <div id="buttons-container">
        <Button text="Jogar Novamente" />
        <Button text="Ver Estatísticas" onClick={setShowStatistics} />
      </div>
      <span id="change-players">Alterar Jogadores</span>
      { showStatistics && <Statistics toggleShowStatistics={toggleShowStatistics}/> }
    </>
  )
}