import { atom } from "jotai";
import { atomWithQuery } from "jotai/query";
import { QueryFunctionContext, QueryKey } from "react-query";

export const countAtom = atom(0);

const greetAtom = atom("Hello");
const myNameAtom = atom("Frank");

export const helloAtom = atom(
  (get) => get(greetAtom) + " " + get(myNameAtom),
  (_, set, value: string) => set(myNameAtom, value)
);

export const idAtom = atom("charmander");
export const pokemonAtom = atomWithQuery((get) => ({
  queryKey: ["pokemon", get(idAtom)],
  queryFn: async ({
    queryKey: [, name],
  }: QueryFunctionContext<QueryKey, any>) =>
    (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json(),
}));
