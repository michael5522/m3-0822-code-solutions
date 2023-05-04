import React from 'react';
import Modal from './modal';
function App(props) {
  const numbers = [1, 25, 34, 455, 599];
  return (
    <div>
      <h1 className="center">React Modal Example</h1>
      {
      numbers.map(zzz => <Modal key={zzz} btnText={`Modal # is ${zzz}`} onConfirm={() => doSomething(zzz)} />)
      }
    </div>
  );
  function doSomething(poke) {
    /* eslint-disable no-console */
    console.log('this function did something', poke);
  }
}

export default App;
