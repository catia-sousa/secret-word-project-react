import "./GameOver.css"

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h2>Fim do jogo</h2>
      <h3>A pontuçao é: <span>{score}</span></h3>
      <button onClick={retry}>Reiniciar jogo</button>
    </div>
  );
};

export default GameOver;