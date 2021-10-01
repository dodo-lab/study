import React from 'react';
import { useFetch } from '../hooks';

export default function GitHubUser({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (loading) return <h1>loading...</h1>;

  if (data) {
    return (
      <>
        <div className="githubUser" style={{ display: 'flex' }}>
          <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
          <div>
            <h1>{data.login}</h1>
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}
          </div>
        </div>
        <button onClick={() => localStorage.removeItem(`user:${login}`)}>
          DELETE
        </button>
        <div
          style={{
            maxHeight: '200px',
            overflowY: 'scroll',
            backgroundColor: 'lightgray',
          }}
        >
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </>
    );
  }

  return null;
}
