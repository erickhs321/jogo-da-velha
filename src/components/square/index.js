import React from "react";
import "./styles.css";
import { ReactComponent as Circle } from "../../assets/Bolinha.svg";
import { ReactComponent as X } from "../../assets/Xizinho.svg";

export default function Square(props) {
  const { value, onClick, isWinningMove, winner, draw } = props;

  function setLoseColorClass() {
    if ((!isWinningMove && winner) || draw) {
      return "notWinningMove";
    }
  }

  return (
    <div id="square" className={setLoseColorClass()} onClick={onClick}>
      {value === "x" ? <X /> : null}
      {value === "o" ? <Circle /> : null}
    </div>
  );
}
