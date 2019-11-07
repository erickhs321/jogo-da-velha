import React, { useState, useEffect } from 'react';
import Square from '../square';
import './styles.css';

export default function Board(props) {
  const {
    turn,
    player1,
    toggleTurn,
    winner, winningMove,
    board,
    setBoard,
    draw,
    calculateWinner,
    calculateDraw,
    getPlayTime,
    timePlayer1,
    timePlayer2,
  } = props;

  useEffect(() => {
    console.log({ timePlayer1, timePlayer2})
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
    setBoard(squares);
    const haveWinner = calculateWinner(squares);
    const haveDraw = calculateDraw(squares);
    getPlayTime(turn, haveWinner || haveDraw);
    toggleTurn();
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
