import React, {useState} from 'react';

type Props = {
  item: string
}

function App({item}: Props) {
  const [color, setColor] = useState('white')

  return (
    <div className="App">
      <header className="App-header">
        <h1>{item}</h1>
        <h2>{color}</h2>
        <button onClick={() => setColor('red')}>color change</button>
      </header>
    </div>
  );
}

export default App;
