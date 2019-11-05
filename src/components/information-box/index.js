import React from 'react';
import './styles.css';


export default function InformationBox(props) {
  const { winner, turn, draw } = props;
  return (
    <div id="information-box" className={(winner || draw) ? 'finish' : 'default'}>
      {console.log({winner, draw})}
      {!winner && !draw && <span>Vez de: {turn}</span>}
      {winner && !draw && <span>{winner} Venceu!</span>}
      {!winner && draw && <span>Empate!</span>}
    </div>
  )
}
