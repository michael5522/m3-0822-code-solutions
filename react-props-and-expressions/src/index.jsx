import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return <button> {props.text} </button>;
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know"/>
    <CustomButton text="React!" />
  </div>
);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(element);
