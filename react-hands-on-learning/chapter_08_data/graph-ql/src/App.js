import React, { useEffect, useState } from 'react';
import { UserDetails } from './components/GitHubUser';
import SearchForm from './components/SearchForm';
import { GraphQLClient } from 'graphql-request';
import SimpleList from './components/SimpleList';

const query = `
  query findRepos($login: String!) {
    user(login: $login) {
      login
      name
      location
      avatar_url: avatarUrl
      repositories(first: 100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

function App() {
  const [login, setLogin] = useState('dodo-lab');
  const [userData, setUserData] = useState();

  useEffect(() => {
    client
      .request(query, { login: 'dodo-lab' })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error);
  }, [login]);

  const handleSerach = (login) => {
    if (login) return setLogin(login);

    setLogin('');
  };

  if (!userData) return <p>loading...</p>;

  return (
    <div className="App">
      <SearchForm value={login} onSearch={handleSerach} />
      <UserDetails data={userData} />
      <p>{userData.repositories.totalCount} - repos</p>
      <SimpleList
        data={userData.repositories.nodes}
        renderItem={(repo) => <span>{repo.name}</span>}
      />
    </div>
  );
}

export default App;
