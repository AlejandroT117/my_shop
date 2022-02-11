import { useEffect, useState } from "react";
const key = "1234";
const q = "pikachu";

//query params
//const url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&${q}=pikachu&limit=10`

//

export const PokeApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState(200);

  const nextPokemon = () => {
    setId(id + 1);
  };

  const previousPokemon = () => {
    id > 1 && setId(id - 1);
  };

  useEffect(() => {
    const fetch_res = fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));

    /* console.log(pokemon); */
  }, [id]);

  return (
    <>
      <hr />

      {pokemon ? (
        <div className="row poke-api">
          <h2>Poke API: id={pokemon.id}</h2>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : (
        <p>Cargando</p>
      )}

      <div>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={previousPokemon}
          disabled={id === 1}
        >
          {" "}
          Anterior
        </button>

        <button className="btn btn-primary" onClick={nextPokemon}>
          Siguiente
        </button>
      </div>

      <hr />
    </>
  );
};
