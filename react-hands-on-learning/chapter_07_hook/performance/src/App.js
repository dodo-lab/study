import React, { useState } from 'react';
import Animals from './components/Animals';
import Cat, { PureCat } from './components/Cat';
import { PureDog } from './components/Dog';

function App() {
  const [cats, setCats] = useState(['Biscuit', 'Jungle']);
  const [pureCats, setPureCats] = useState(['Pure-Biscuit', 'Pure-Jungle']);
  const [pureDogs, setPureDogs] = useState(['Pure-Dog1', 'Pure-Dog2']);

  return (
    <div className="App">
      <Animals
        animals={cats}
        createAnimal={(name, i) => <Cat name={name} key={i} />}
        addAnimal={(name) => setCats([...cats, name])}
      />
      <Animals
        animals={pureCats}
        createAnimal={(name, i) => <PureCat name={name} key={i} />}
        addAnimal={(name) => setPureCats([...pureCats, name])}
      />
      <Animals
        animals={pureDogs}
        createAnimal={(name, i) => (
          <PureDog
            name={name}
            shout={(name) => console.log(`${name} shout!`)}
            key={i}
          />
        )}
        addAnimal={(name) => setPureDogs([...pureDogs, name])}
      />
    </div>
  );
}

export default App;
