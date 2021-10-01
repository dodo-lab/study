import React from 'react';
import Fetch from './Fetch';

function UserDetails({ data }) {
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

export default function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}
