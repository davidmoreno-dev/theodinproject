function Scoreboard({ score, bestScore, total }) {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <span className="score-label">Puntuación</span>
        <span className="score-value">{score} / {total}</span>
      </div>
      <div className="score-divider" />
      <div className="score-item">
        <span className="score-label">Mejor</span>
        <span className="score-value best">{bestScore}</span>
      </div>
    </div>
  );
}

export default Scoreboard;