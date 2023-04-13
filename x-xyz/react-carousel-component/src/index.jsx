import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const pokedex = [
  { url: 'https://th.wallhaven.cc/small/76/76z73e.jpg', number: 0 },
  { url: 'https://th.wallhaven.cc/small/43/43xk86.jpg', number: 1 },
  { url: 'https://th.wallhaven.cc/small/x1/x1wx5v.jpg', number: 2 },
  { url: 'https://th.wallhaven.cc/small/9m/9m6jo1.jpg', number: 3 },
  { url: 'https://th.wallhaven.cc/small/83/83m7yy.jpg', number: 4 }
];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel hana={pokedex}/>);
