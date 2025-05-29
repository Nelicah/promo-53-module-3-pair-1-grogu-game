import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";

function App() {
  const [name, setName] = useState("");
  const handleName = (ev) => {
    const inputValue = ev.target.value;
    setName(inputValue);
  };
  const [position, setPosition] = useState(0);
  const [cookies, setCookies] = useState(3);
  const [eggs, setEggs] = useState(3);
  const [frogs, setFrogs] = useState(3);
  const [result, setResult] = useState("");
  const [game, setGame] = useState("");

  const rollDice = (max) => {
    return Math.floor(Math.random() * max);
  };
  console.log(rollDice(4));
  const numberDice = rollDice(4);
  /* setGame(numberDice === 4 ? setPosition : )*/

  return (
    <>
      <Header />
      <main className="page">
        <input
          className="input"
          type="text"
          placeholder="Pon aquí tu nombre"
          onChange={handleName}
        />
        <Board />
        <section>
          <button className="dice">Lanzar Dado</button>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
