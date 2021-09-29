import React, { useState } from 'react';
import Checkbox from './components/Checkbox';
import FavoritePhrase from './components/FavoritePhrase';

function App() {
  const [favoritePhrases, setFavoritePhrases] = useState([1]);

  return (
    <div className="App">
      <Checkbox />
      <div>
        <input
          type="number"
          value={favoritePhrases.length}
          onChange={(e) => {
            const next = e.target.value;

            if (favoritePhrases.length > next) {
              setFavoritePhrases(favoritePhrases.filter((_, i) => i < next));
            } else {
              setFavoritePhrases([...favoritePhrases, 1]);
            }
          }}
        />
      </div>
      {favoritePhrases.map((_, i) => (
        <FavoritePhrase key={i} no={i} />
      ))}
    </div>
  );
}

export default App;
