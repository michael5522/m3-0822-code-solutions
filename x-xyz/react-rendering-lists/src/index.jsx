import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class Pokemon extends React.Component {
  mapped() {
    const gg = this.props.ola;
    const pp = gg.map(x => {
      return (
        <li key={x.number}> {x.name}</li>
      );
    });
    return pp;
  }

  render() {
    const hana = this.mapped();
    return (
      <ul>
        {hana}
      </ul>
    );
  }
}

function Pokeman(props) {
  const mico = props.ola;
  const henry = mico.map(x => {
    return (
      <li key={x.number}>{x.name}</li>
    );
  });
  return (
    <ul>
      {henry}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Pokemon ola={pokedex} />
      <Pokeman ola={pokedex} />
    </div>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
