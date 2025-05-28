import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [name, setName] = useState("");
  const handleName = (ev) => {
    const inputValue = ev.target.value;
    setName(inputValue);
  };

  return (
    <>
      <header>
        <h1>¡Cuidado con Grogu, {name}!</h1>
      </header>
      <main className="page">
        <input
          className="input"
          type="text"
          placeholder="Pon aquí tu nombre"
          onChange={handleName}
        />
        <section className="board">
          <div className="cell">
            <div className="grogu">👣</div>
          </div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </section>

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
