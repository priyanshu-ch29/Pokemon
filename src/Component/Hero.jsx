import React, { useEffect, useState } from "react";

const Hero = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        setLoading(true);

        const response1 = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data1 = await response1.json();

        const pokemonDetails = await Promise.all(
          data1.results.map(async (pokemon) => {
            const response2 = await fetch(pokemon.url);
            const data2 = await response2.json();
            const formUrl = data2.forms[0].url;

            const response3 = await fetch(formUrl);
            const data3 = await response3.json();

            return {
              name: pokemon.name,
              sprite: data3.sprites.front_default,
            };
          })
        );

        setPokemonData(pokemonDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="mt-10 text-center">
        <input
          onChange={(e) => setSearchName(e.target.value)}
          type="search"
          value={searchName}
          placeholder="search for pokemon"
          className="border border-black w-[55%] p-3"
        />
      </div>
      <div className="grid grid-cols-3 gap-10 m-5 w-[85%] justify-center justify-items-center mx-auto max-md:grid-cols-1 max-xl:grid-cols-2">
        {pokemonData
          .filter((res) => res?.name.toLowerCase().includes(searchName))
          .map((items) => {
            console.log(items);
            return (
              <>
                <div className="w-[24rem] shadow-lg h-full bg-gray-200 hover:cursor-pointer hover:scale-105">
                  <h1 className=" font-semibold text-center m-4 p-4">
                    {items.name}
                  </h1>
                  <img
                    src={items.sprite}
                    alt=""
                    className=" w-full p-4 h-[47vh]"
                  />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Hero;
