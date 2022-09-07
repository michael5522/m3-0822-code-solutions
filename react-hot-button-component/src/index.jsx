import React from 'react';
import ReactDOM from 'react-dom/client';
import HotButton from './hot-button';

const element = (
  <div>
    <HotButton />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
