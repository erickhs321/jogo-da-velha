import React from "react";
import "./styles.css";

export default function InformationBox(props) {
  const { winner, turn, draw } = props;

  return (
    <div id="information-box">
      <div className={winner || draw ? "finish" : "default"}>
        {!winner && !draw && (
          <span>
            Vez de: <span>{turn}</span>
          </span>
        )}
        {winner && !draw && <span>{winner} venceu!</span>}
        {!winner && draw && <span>Empate!</span>}
      </div>
    </div>
  );
}
