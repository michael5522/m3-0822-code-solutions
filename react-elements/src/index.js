import React from 'react';
import * as ReactDOM from 'react-dom';

const hello = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
// console.log(hello);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(hello);
