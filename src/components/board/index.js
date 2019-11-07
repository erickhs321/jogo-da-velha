import React from "react";
import Square from "../square";
import "./styles.css";

export default function Board(props) {
  const {
    turn,
    player1,
    toggleTurn,
    winner,
    winningMove,
    board,
    setBoard,
    calculateWinner,
    calculateDraw,
    getPlayTime,
    draw
  } = props;

  function renderSquare(i) {
    return (
      <Square
        key={i}
        value={board[i]}
        isWinningMove={isWinningMove(i)}
        winner={winner}
        draw={draw}
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
    squares[i] = turn === player1 ? "x" : "o";
    const haveWinner = calculateWinner(squares);
    let haveDraw = false;
    if (!haveWinner) {
      haveDraw = calculateDraw(squares);
    }
    setBoard(squares);
    getPlayTime(turn, haveWinner || haveDraw);
    toggleTurn();
  }

  return (
    <>
      <div id="board-container">
        <div id="board">
          <div id="square-container">
            {board.map((square, index) => {
              return renderSquare(index);
            })}
          </div>
        </div>
      </div>
    </>
  );
}
