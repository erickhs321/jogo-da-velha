import React from 'react';
import './styles.css'
import { ReactComponent as Circle } from '../../assets/Bolinha.svg';
import { ReactComponent as X } from '../../assets/Xizinho.svg';

export default function Square({turn}) {
  return (
    <div id="square">
      {turn === 1 ? <Circle /> : <X />}
    </div>
  );
}
