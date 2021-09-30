import React, { useState, useEffect } from 'react';

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export default function GitHubUser({ login }) {
  const [data, setData] = useState(loadJSON(`user:${login}`));
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('useEffect:data', login, data?.login);
    if (!data) return;
    if (data.login !== login) return;

    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);

  useEffect(() => {
    console.log('useEffect:login', login, data?.login);
    if (!login) return;
    if (data && data.login === login) return;

    setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

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
