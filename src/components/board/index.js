import React, {useState} from 'react';
import Square from '../square';
import './styles.css';

export default function Board(props) {
  const { turn, player1, toggleTurn, calculateWinner } = props
  const [board, setBoard] = useState(Array(9).fill(null));


  function renderSquare(i) {
    return (
      <Square
        key={i}
        value={board[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  function handleClick(i) {
    const squares = board.slice();
    if(calculateWinner(squares) || squares[i])
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
  );
}
