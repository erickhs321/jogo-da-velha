import React, { useState, useEffect } from 'react';
import Board from '../board';
import Button from '../button';
import Statistics from '../statistics';
import InformationBox from '../information-box';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './styles.css';


export default function Game() {
  const [showStatistics, setShowStatistics] = useState(false);
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [matchIsOver, setMatchIsOver] = useState(false);
  const [winningMove, setWinningMove] = useState([]);
  const [winner, setWinner] = useState('');
  const [player1, setPlayer1] = useState('Jogador 1');
  const [player2, setPlayer2] = useState('Jogador 2');
  const [player1Victories, setPlayer1Victories] = useState(0);
  const [player2Victories, setPlayer2Victories] = useState(0);
  const [turn, setTurn] = useState(player1);
  const [board, setBoard] = useState(Array(9).fill(null));


  function toggleShowStatistics() {
    setShowStatistics(!showStatistics);
  }

  function toggleTurn() {
    if(!winner) {
      setTurn(turn === player1 ? player2 : player1)
    }
  }

  function rafflePlayer() {
    const turn = Math.floor(Math.random() * 2) + 1
    setTurn(turn === 1 ? player1 : player2);
  }

  function startGame() {
    setBoard(Array(9).fill(null));
    setWinner('');
    setGameIsRunning(true);
    setMatchIsOver(false);
    rafflePlayer();
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
        setWinningMove([a, b, c]);
        if(squares[a] === 'x' ) {
          setWinner(player1);
          setPlayer1Victories(player1Victories + 1)
        }else {
          setWinner(player2);
          setPlayer2Victories(player2Victories + 1)
        }
        setMatchIsOver(true);
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
      {!gameIsRunning && (
        <div>
          <input type="text" value={player1} onChange={(e) => setPlayer1(e.target.value)}/><br></br>
          <input type="text" value={player2} onChange={(e) => setPlayer2(e.target.value)}/>
          <Button text="Jogar" onClick={startGame}/>
        </div>
      )
      }
      { gameIsRunning && (
        <>
          <Board
            calculateWinner={calculateWinner}
            winner={winner}
            winningMove={winningMove}
            toggleTurn={toggleTurn}
            turn={turn}
            player1={player1}
            player2={player2}
            board={board}
            setBoard={setBoard}
          />
          <InformationBox winner={winner} turn={turn}/>
          <div id="buttons-container">
            <Button text="Jogar Novamente" disabled={!matchIsOver} onClick={startGame} />
            <Button text="Ver Estatísticas" disabled={!matchIsOver} onClick={setShowStatistics} />
          </div>
          <span id="change-players" onClick={() => setGameIsRunning(false)}>Alterar Jogadores</span>
          { showStatistics &&
            <Statistics
              toggleShowStatistics={toggleShowStatistics}
              player1Victories={player1Victories}
              player2Victories={player2Victories}
            />
          }
        </>
      )}
    </>
  )
}
