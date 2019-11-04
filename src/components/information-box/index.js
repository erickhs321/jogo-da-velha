import React from 'react';
import './styles.css';


export default function InformationBox(props) {
  const { winner, turn } = props;
  return (
    <div id="information-box" className={winner ? 'winner' : 'default'}>
      {!winner && <span>Vez de: {turn}</span>}
      {winner && <span>{winner} Venceu!</span>}
    </div>
  )
}
