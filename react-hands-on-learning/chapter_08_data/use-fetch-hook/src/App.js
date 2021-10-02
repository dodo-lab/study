import React, { useState } from 'react';
import GitHubUser from './components/GitHubUser';
import SearchForm from './components/SearchForm';
import UserRepositories from './components/UserRepositories';
import RepositoryReadme from './components/RepositoryReadme';

function App() {
  const [login, setLogin] = useState('dodo-lab');
  const [repo, setRepo] = useState('sandbox');

  return (
    <div className="App">
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
      <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      <RepositoryReadme login={login} repo={repo} />
    </div>
  );
}

export default App;
