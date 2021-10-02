import React, { useState } from 'react';
import GitHubUser from './components/GitHubUser';
import SearchForm from './components/SearchForm';
import UserRepositories from './components/UserRepositories';
import RepositoryReadme from './components/RepositoryReadme';

function App() {
  const [login, setLogin] = useState('dodo-lab');
  const [repo, setRepo] = useState();

  const handleSerach = (login) => {
    if (login) return setLogin(login);

    setLogin('');
    setRepo('');
  };

  return (
    <div className="App">
      <SearchForm value={login} onSearch={handleSerach} />
      {login && <GitHubUser login={login} />}
      {login && (
        <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      )}
      {login && repo && <RepositoryReadme login={login} repo={repo} />}
    </div>
  );
}

export default App;
