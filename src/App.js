import React from 'react';
import Board from './components/board';
import "typeface-roboto";
import "typeface-roboto-mono";
import { ReactComponent as Logo } from './assets/Logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="title">
        <Logo />
        <h1>Jogo da velha</h1>
      </div>
      <Board />
    </div>
  );
}

export default App;
