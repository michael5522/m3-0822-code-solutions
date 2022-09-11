import React from 'react';
import ReactDOM from 'react-dom/client';

function PokeList(props) {
  const total = props.poke;
  const listItems = total.map(pokemon =>
    <li key={pokemon.number.toString()}>{pokemon.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<PokeList poke={pokedex}/>);
