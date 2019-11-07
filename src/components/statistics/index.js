import React, { useState } from "react";
import { ReactComponent as Close } from "../../assets/Fechar.svg";
import "./style.css";

export default function Statistics(props) {
  const {
    toggleShowStatistics,
    player1Victories,
    player2Victories,
    timePlayer1,
    timePlayer2
  } = props;

  const [timePlayer1Total] = useState(calculateTimeTotalOfPlayer(timePlayer1));

  const [timePlayer2Total] = useState(calculateTimeTotalOfPlayer(timePlayer2));

  const [timePlayer1Average] = useState(
    calculateAverage(timePlayer1Total, timePlayer1.length)
  );

  const [timePlayer2Average] = useState(
    calculateAverage(timePlayer2Total, timePlayer2.length)
  );

  const [totalTime] = useState(
    calculateTotalOfAllPlayers(timePlayer1Total, timePlayer2Total)
  );

  function calculateTotalOfAllPlayers(timePlayer1Total, timePlayer2Total) {
    return timePlayer1Total + timePlayer2Total;
  }

  function calculateTimeTotalOfPlayer(timePlayer) {
    return timePlayer.reduce((acc, current) => current - acc);
  }

  function calculateAverage(timePlayerTotal, timePlayerLength) {
    return timePlayerTotal / timePlayerLength;
  }

  function formatTime(millis) {
    let hours = Math.floor(millis / 3600000);
    let minutes = Math.floor((millis % 3600000) / 60000);
    let seconds = (millis % 60000) / 1000;

    if (minutes) {
      seconds = seconds.toFixed(0);
    } else if (!minutes && !hours) {
      seconds = seconds.toFixed(1);
    }

    return `${hours ? hours + "h" : ""}${minutes ? minutes + "m" : ""}${
      seconds ? seconds + "s" : ""
    }`;
  }

  return (
    <div id="background">
      <div id="statistics">
        <Close id="close" onClick={toggleShowStatistics} />
        <h2>Estatísticas</h2>
        <>
          <div className="row">
            <div className="player-infos player-1">
              <p>{player1Victories}</p>
              <p>jogador 1</p>
            </div>
            <span id="x">x</span>
            <div className="player-infos player-2">
              <p>{player2Victories}</p>
              <p>jogador 2</p>
            </div>
          </div>
          <div className="container-time">
            <div className="row">
              <p className="time-value player-1">
                {formatTime(timePlayer1Average)}
              </p>
              <p className="time-title">Tempo médio por jogada</p>
              <p className="time-value player-2">
                {formatTime(timePlayer2Average)}
              </p>
            </div>
            <div className="row">
              <p className="time-value player-1">
                {formatTime(timePlayer1Total)}
              </p>
              <p className="time-title">Tempo total jogado</p>
              <p className="time-value player-2">
                {formatTime(timePlayer2Total)}
              </p>
            </div>
          </div>
          <div className="row total-time">
            <p className="time-title">Tempo total geral</p>
            <p className="time-total">{formatTime(totalTime)}</p>
          </div>
        </>
      </div>
    </div>
  );
}
