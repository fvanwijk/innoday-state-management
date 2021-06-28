import { atom, useAtom } from "jotai";
import { atomWithQuery } from "jotai/query";
import React, { useEffect } from "react";
import { QueryFunctionContext, QueryKey } from "react-query";

const idAtom = atom("charmander");
const pokemonAtom = atomWithQuery((get) => ({
  queryKey: ["pokemon", get(idAtom)],
  queryFn: async ({
    queryKey: [, name],
  }: QueryFunctionContext<QueryKey, any>) =>
    (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json(),
}));

export const Pokemon = ({ name }: { name: string }) => {
  const [, setId] = useAtom(idAtom);
  const [pokemon] = useAtom(pokemonAtom);

  useEffect(() => {
    setId(name);
  }, [setId, name]);

  return (
    <div>
      {/* <pre>{JSON.stringify(pokemon)}</pre> */}
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
    </div>
  );
};
