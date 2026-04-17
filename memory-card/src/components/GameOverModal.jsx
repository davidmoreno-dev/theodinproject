function GameOverModal({ won, score, onRestart }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{won ? "¡Has ganado!" : "¡Game Over!"}</h2>
        <p>
          {won
            ? "¡Increíble! Has clicado todas las cartas sin repetir."
            : `Has conseguido ${score} punto${score !== 1 ? "s" : ""} antes de repetir.`}
        </p>
        <button onClick={onRestart}>Jugar de nuevo</button>
      </div>
    </div>
  );
}

export default GameOverModal;