import React from 'react';
import ReactDOM from 'react-dom';
import StopWatch from './stopwatch';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<StopWatch />);
