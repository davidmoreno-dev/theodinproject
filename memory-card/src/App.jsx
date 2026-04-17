import { useState, useEffect } from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";
import GameOverModal from "./components/GameOverModal";
import { shuffleArray } from "./utils";

const POKEMON_IDS = [25, 1, 4, 7, 150, 39, 133, 94, 143, 6, 9, 131];

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      const promises = POKEMON_IDS.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => res.json())
          .then((data) => ({
            id: data.id,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            image: data.sprites.other["official-artwork"].front_default,
          }))
      );

      const results = await Promise.all(promises);
      setPokemon(shuffleArray(results));
      setLoading(false);
    }

    fetchPokemon();
  }, []);

  function handleCardClick(id) {
    if (gameOver) return;

    if (clickedIds.has(id)) {
      if (score > bestScore) setBestScore(score);
      setGameOver(true);
      setWon(false);
      return;
    }

    const newClicked = new Set(clickedIds);
    newClicked.add(id);
    const newScore = score + 1;

    setClickedIds(newClicked);
    setScore(newScore);

    if (newScore === POKEMON_IDS.length) {
      setBestScore(newScore);
      setGameOver(true);
      setWon(true);
      return;
    }

    setPokemon((prev) => shuffleArray(prev));
  }

  function handleRestart() {
    setClickedIds(new Set());
    setScore(0);
    setGameOver(false);
    setWon(false);
    setPokemon((prev) => shuffleArray(prev));
  }

  if (loading) return <p className="loading">Cargando Pokémon...</p>;

  return (
    <div>
      <header className="header">
        <h1>🧠 Memory Card</h1>
        <p className="subtitle">Clica en cada carta sin repetir. ¡Se mezclan tras cada clic!</p>
        <Scoreboard score={score} bestScore={bestScore} total={POKEMON_IDS.length} />
      </header>

      <div className="card-grid">
        {pokemon.map((p) => (
          <Card key={p.id} pokemon={p} onClick={handleCardClick} />
        ))}
      </div>

      {gameOver && (
        <GameOverModal won={won} score={score} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;