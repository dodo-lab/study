import React, { useState } from 'react';
import GitHubUser from './components/GitHubUser';
import SearchForm from './components/SearchForm';

function App() {
  const [login, setLogin] = useState('dodo-lab');

  return (
    <div className="App">
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </div>
  );
}

export default App;
