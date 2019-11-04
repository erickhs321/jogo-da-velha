import React, { useState, useEffect  } from 'react';
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
    setBoard
  } = props

  useEffect(() => {
    if(!winner){
      calculateWinner(board);
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
    calculateWinner(board);
    if(winner || squares[i])
    {
      return;
    }

    squares[i] = turn === player1 ? 'o' : 'x'
    setBoard(squares);
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
