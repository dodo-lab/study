import React, { useState, useEffect } from 'react';

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export default function GitHubUser({ login }) {
  const [data, setData] = useState(loadJSON(`user:${login}`));

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

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) {
    return (
      <div
        style={{
          maxHeight: '200px',
          overflowY: 'scroll',
          backgroundColor: 'lightgray',
        }}
      >
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

  return null;
}
