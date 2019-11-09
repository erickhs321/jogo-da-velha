import React, { useState } from "react";
import Button from "../button";
import Alert from "../alert";
import { ReactComponent as Circle } from "../../assets/Bolinha.svg";
import { ReactComponent as X } from "../../assets/Xizinho.svg";
import Input from "../input";
import "./styles.css";

export default function Home(props) {
  const { player1, player2, setPlayer1, setPlayer2, startGame } = props;

  const [message, setMessage] = useState("");
  const [typeAlert, setTypeAlert] = useState("");

  /*
    função responsável por fazer as validações no formulário,
    caso esteja tudo correto ela inicia a partida
  */
  function validateForm() {
    const player1Trim = player1.trim();
    const player2Trim = player2.trim();
    try {
      if (!player1Trim || !player2Trim) {
        setTypeAlert("error");
        throw "Todos os campos devem ser preenchidos";
      } else if (player1Trim.length > 12 || player2Trim.length > 12) {
        setTypeAlert("error");
        throw "O tamanho do nome deve ter no máximo 12 caracteres";
      } else if (player1Trim === player2Trim) {
        setTypeAlert("error");
        throw "O nome dos jogadores não podem ser iguais";
      } else {
        setPlayer1(player1Trim);
        setPlayer2(player2Trim);
        setMessage("");
        startGame();
      }
    } catch (e) {
      setMessage(e);
    }
  }

  return (
    <div id="home">
      <Alert message={message} type={typeAlert} />
      <span className="message">Insira o nome dos jogadores:</span>
      <Input
        value={player1}
        setValue={setPlayer1}
        icon={<X />}
        placeholder="Digite o nome do jogador 1"
      />
      <Input
        value={player2}
        setValue={setPlayer2}
        icon={<Circle />}
        placeholder="Digite o nome do jogador 2"
      />
      <Button text="Iniciar jogo" onClick={validateForm} />
    </div>
  );
}
