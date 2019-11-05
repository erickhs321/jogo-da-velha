import React, { useState, useEffect } from 'react';
import Square from '../square';
import './styles.css';

export default function Board(props) {
  const {
    turn,
    player1,
    toggleTurn,
    calculateWinner,
    winner, winningMove,
    board,
    setBoard,
    draw,
    getPlayTime,
    timePlayer1,
    timePlayer2,
  } = props;

  useEffect(() => {
    if (!winner && !draw) {
      calculateWinner(board);
      console.log({ timePlayer1, timePlayer2})
    }
  });

  function renderSquare(i) {
    return (
      <Square
        key={i}
        value={board[i]}
        isWinningMove={isWinningMove(i)}
        winner={winner}
        onClick={() => handleClick(i)}
      />
    );
  }

  function isWinningMove(i) {
    return winningMove.includes(i);
  }

  function handleClick(i) {
    const squares = board.slice();
    if (winner || squares[i]) {
      return;
    }
    squares[i] = turn === player1 ? 'x' : 'o';
    calculateWinner(board);
    setBoard(squares);
    toggleTurn();
    getPlayTime(turn);
  }

  return (
    <>
      <div id="board-container">
        <div id="board">
          <div id="square-container">
            {
              board.map((square, index) => {
                return renderSquare(index)
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
