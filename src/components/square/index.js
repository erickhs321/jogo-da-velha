import React, { useState, useEffect } from 'react';
import './styles.css'
import { ReactComponent as Circle } from '../../assets/Bolinha.svg';
import { ReactComponent as X } from '../../assets/Xizinho.svg';

export default function Square({turn, position}) {
  const [mark, setMark] = useState(null);

  function marker() {
    setMark(<Circle/>)
  }

  function fillSquare() {
    switch(mark){
      case null:
        return null;
      case 1:
        return <Circle />
      case 2:
        return <X />
      default:
        return null;
    }
  }

  return(
    <div id="square" onClick={marker}>
      {mark}
    </div>
  )
}
