import React from 'react';
import './styles.css'
import { ReactComponent as Circle } from '../../assets/Bolinha.svg';
import { ReactComponent as X } from '../../assets/Xizinho.svg';

export default function Square({props}) {
  return (
    <div id="square">
      <Circle />
      <X />
    </div>
  );
}
