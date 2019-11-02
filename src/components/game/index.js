import React, {useState} from 'react';
import Board from '../board';
import Button from '../button';
import Statistics from '../statistics';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './styles.css';


export default function Game() {
  const [showStatistics, setShowStatistics] = useState(false);

  function toggleShowStatistics() {
    setShowStatistics(!showStatistics);
  }

  return (
    <>
    <div id="title">
      <Logo />
      <h1>Jogo da velha</h1>
    </div>
      <Board />
      <div id="buttons-container">
        <Button text="Jogar Novamente" />
        <Button text="Ver Estatísticas" onClick={setShowStatistics} />
      </div>
      { showStatistics && <Statistics toggleShowStatistics={toggleShowStatistics}/> }
    </>
  )
}