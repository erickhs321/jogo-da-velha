import React, { useState, useEffect } from 'react';
import Board from '../board';
import Button from '../button';
import Statistics from '../statistics';
import InformationBox from '../information-box';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './styles.css';

//componente responsável por controlar o jogo
export default function Game() {
  const [showStatistics, setShowStatistics] = useState(false);
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [matchIsOver, setMatchIsOver] = useState(false);
  const [winningMove, setWinningMove] = useState([]);
  const [draw, setDraw] = useState(false);
  const [winner, setWinner] = useState(false);
  const [player1, setPlayer1] = useState('Jogador 1');
  const [player2, setPlayer2] = useState('Jogador 2');
  const [player1Victories, setPlayer1Victories] = useState(0);
  const [player2Victories, setPlayer2Victories] = useState(0);
  const [timePlayer1, setTimePlayer1] = useState([]);
  const [timePlayer2, setTimePlayer2] = useState([]);
  const [turn, setTurn] = useState(player1);
  const [board, setBoard] = useState(Array(9).fill(null));

  //exibir/esconder estatísticas
  function toggleShowStatistics() {
    setShowStatistics(!showStatistics);
  }

  // alternar o turno
  function toggleTurn() {
    if (!winner && !draw) {
      setTurn(turn === player1 ? player2 : player1)
    }
  }

  //função responsável por sortear qual o jogador da vez
  function rafflePlayer() {
    const turn = Math.floor(Math.random() * 2) + 1
    setTurn(turn === 1 ? player1 : player2);
  }

  //função responsável por iniciar o jogo
  function startGame() {
    setBoard(Array(9).fill(null));
    setDraw(false);
    setWinner(false);
    setGameIsRunning(true);
    setMatchIsOver(false);
    rafflePlayer();
  }

  //verifica se ouve um empate
  function calculateDraw(board) {
    if(!winner && !draw) {
      const haveAnyEmptySquares = board.includes(null);
      if (!haveAnyEmptySquares) {
        setDraw(true);
        setPlayer1Victories(player1Victories + 1);
        setPlayer2Victories(player2Victories + 1);
        setMatchIsOver(true);
      } else {
        setDraw(false)
      }
    }
  }

  /*
    verificar se há um ganhador e quando ouver atribuir ele a variável
    winner do estado
  */
  function calculateWinner(board) {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (board[a] === 'x') {
          setWinner(player1);
          setPlayer1Victories(player1Victories + 1)
        } else {
          setWinner(player2);
          setPlayer2Victories(player2Victories + 1)
        }
        setWinningMove([a, b, c]);
        return setMatchIsOver(true);
      }
    }

    calculateDraw(board);
  }

    return (
      <>
        <div id="title">
          <Logo />
          <h1>Jogo da velha</h1>
        </div>
        {!gameIsRunning && (
          <div>
            <input type="text" value={player1} onChange={(e) => setPlayer1(e.target.value)} /><br></br>
            <input type="text" value={player2} onChange={(e) => setPlayer2(e.target.value)} />
            <Button text="Jogar" onClick={startGame} />
          </div>
        )
        }
        {gameIsRunning && (
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
              calculateDraw={calculateDraw}
              draw={draw}
            />
            <InformationBox winner={winner} turn={turn} draw={draw} />
            <div id="buttons-container">
              <Button text="Jogar Novamente" disabled={!matchIsOver} onClick={startGame} />
              <Button text="Ver Estatísticas" disabled={!matchIsOver} onClick={setShowStatistics} />
            </div>
            <span id="change-players" onClick={() => setGameIsRunning(false)}>Alterar Jogadores</span>
            {showStatistics &&
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
