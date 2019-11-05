import React, {useEffect} from 'react';
import { ReactComponent as Close } from '../../assets/Fechar.svg';
import './style.css';

export default function Statistics(props) {

  const {
    toggleShowStatistics,
    player1Victories,
    player2Victories,
    timePlayer1,
    timePlayer2,
  } = props;

  function calculateAverage() {
    const sumPlayer1 = timePlayer1.reduce((acc, current) => acc + current);
    const averagePlayer1 = sumPlayer1 / timePlayer1.length;

    console.log(averagePlayer1);
  }

  function formatMilliseconds(millis) {
    let hours = Math.floor(millis/3600000);
    let minutes = Math.floor(millis % 3600000 / 60000);
    let seconds =  ((millis % 60000) / 1000)

    if(minutes) {
      seconds = seconds.toFixed(0);
    }else if (!minutes && !hours) {
      seconds = seconds.toFixed(1);;
    }

    return `${hours ? hours + 'h' : ''}${minutes ? minutes + 'm' : ''}${seconds ? seconds + 's' : ''}`;
  }

  useEffect(() => {
    calculateAverage()
  });

  return (
    <div id="background">
      <div id="statistics">
        <Close id="close" onClick={toggleShowStatistics} />
        <h2>Estatísticas</h2>
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
            <p className="time-value player-1">3.4s</p>
            <p className="time-title">Tempo médio por jogada</p>
            <p className="time-value player-2">10m30s</p>
          </div>
          <div className="row">
            <p className="time-value player-1">3.4s</p>
            <p className="time-title">Tempo total jogado</p>
            <p className="time-value player-2">15m21s</p>
          </div>
        </div>
        <div className="row total-time">
          <p className="time-title">Tempo total geral</p>
          <p className="time-total">15m21s</p>
        </div>
      </div>
    </div>
  )
}
