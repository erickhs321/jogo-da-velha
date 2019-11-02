import React, { useState } from 'react';
import { ReactComponent as Close } from '../../assets/Fechar.svg';
import './style.css';

export default function Statistics() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    showModal && (
      <div id="background">
        <div id="statistics">
        <Close id="close" onClick={closeModal} />
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
  )
}
