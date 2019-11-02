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
          <div className="player-infos">
            <p>3</p>
            <p>jogador 1</p>
          </div>
          <p>X</p>
          <div className="player-infos">
            <p>3</p>
            <p>jogador 1</p>
          </div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  )
}
