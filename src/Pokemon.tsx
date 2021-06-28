import { useAtom } from "jotai";
import React, { useEffect } from "react";

import { idAtom, pokemonAtom } from "./atoms";

export const Pokemon = ({
  className,
  name,
}: {
  className: string;
  name: string;
}) => {
  const [, setId] = useAtom(idAtom);
  const [pokemon] = useAtom(pokemonAtom);

  useEffect(() => {
    setId(name);
  }, [setId, name]);

  return (
    <div className={className} style={{ margin: "1rem" }}>
      {/* <pre>{JSON.stringify(pokemon)}</pre> */}
      <h2>{name}</h2>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
    </div>
  );
};
