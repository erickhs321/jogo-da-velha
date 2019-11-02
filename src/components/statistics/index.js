import React, { useState, useRef } from 'react';
import { ReactComponent as Close } from '../../assets/Fechar.svg';
import ReactDOM from 'react-dom';
import './style.css';

export default function Statistics() {

  function closeShowStatistics() {
  }
  return (
    <div id="background">
      <div id="statistics">
        <Close id="close" onClick={closeShowStatistics} />
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
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  )
}
