import React from 'react';
import { ReactComponent as Close } from '../../assets/Fechar.svg';
import './style.css';

export default function Statistics({toggleShowStatistics}) {

  return (
    <div id="background" onClick={toggleShowStatistics}>
      <div id="statistics">
        <Close id="close" onClick={toggleShowStatistics} />
        <h2>Estatísticas</h2>
        <div className="row">
          <div className="player-infos player-1">
            <p>3</p>
            <p>jogador 1</p>
          </div>
          <span id="x">x</span>
          <div className="player-infos player-2">
            <p>3</p>
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
