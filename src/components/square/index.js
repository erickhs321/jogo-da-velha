import React from 'react';
import './styles.css'
import { ReactComponent as Circle } from '../../assets/Bolinha.svg';
import { ReactComponent as X } from '../../assets/Xizinho.svg';

export default function Square({value, onClick, isWinningMove, winner}) {

  function setColorWin() {
    if(!isWinningMove && winner) {
      return 'notWinningMove'
    }
  }

  return(
    <div id="square" className={setColorWin()} onClick={onClick}>
      {value === 'x' ? <X /> : null }
      {value === 'o' ? <Circle /> : null }
    </div>
  )
}
