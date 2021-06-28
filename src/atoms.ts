import { atom } from 'jotai';

export const countAtom = atom(0);

const greetAtom = atom('Hello');
const myNameAtom = atom('Frank');

export const helloAtom = atom(
  get => get(greetAtom) + ' ' + get(myNameAtom),
  (_, set, value: string) => set(myNameAtom, value)
);

export const pokemonAtom = atom(null);
