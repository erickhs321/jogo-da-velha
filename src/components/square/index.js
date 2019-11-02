import React, { useState, useEffect } from 'react';
import './styles.css'
import { ReactComponent as Circle } from '../../assets/Bolinha.svg';
import { ReactComponent as X } from '../../assets/Xizinho.svg';

export default function Square({turn, toggleTurn}) {
  const [mark, setMark] = useState(null);

  function fill() {
    setMark(turn ? <Circle/> : <X />)
    toggleTurn();
  }

  return(
    <div id="square" onClick={fill}>
      {mark}
    </div>
  )
}
