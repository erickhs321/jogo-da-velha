import React, { useState } from 'react';
import './styles.css';


export default function InformationBox(props) {
  const { winner, turn } = props;
  return (
    <div id="information-box">
      {!winner && <span>Vez de: {turn}</span>}
      {winner && <span>{winner} Venceu</span>}
      {console.log(winner)}
    </div>
  )
}
