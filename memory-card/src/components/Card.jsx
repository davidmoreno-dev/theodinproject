function Card({ pokemon, onClick }) {
  return (
    <div className="card" onClick={() => onClick(pokemon.id)}>
      <img src={pokemon.image} alt={pokemon.name} />
      <span>{pokemon.name}</span>
    </div>
  );
}

export default Card;