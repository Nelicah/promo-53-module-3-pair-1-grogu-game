function Dice(props) {
  const handleClick = () => {
    console.log("has hecho click");
    props.rollDice(4);
  };
  return (
    <section>
      <button className="dice" onClick={handleClick}>
        Lanzar Dado
      </button>
      <div className="game-status">En curso</div>
    </section>
  );
}

export default Dice;
