import React from "react";
import Button from "../button";
import { ReactComponent as Circle } from "../../assets/Bolinha.svg";
import { ReactComponent as X } from "../../assets/Xizinho.svg";
import "./styles.css";

export default function Home(props) {
  const { player1, player2, setPlayer1, setPlayer2, startGame } = props;

  return (
    <div id="home">
      <span className="message">Insira o nome dos jogadores:</span>
      <label htmlFor="player1">
        <span>
          Jogador 1 <X />
        </span>
        <input
          name="player1"
          value={player1}
          onChange={e => setPlayer1(e.target.value)}
        />
      </label>
      <label htmlFor="player1">
        <span>
          Jogador 2 <Circle />
        </span>
        <input
          name="player2"
          value={player2}
          onChange={e => setPlayer2(e.target.value)}
        />
      </label>
      <Button text="Iniciar jogo" onClick={startGame} />
    </div>
  );
}
