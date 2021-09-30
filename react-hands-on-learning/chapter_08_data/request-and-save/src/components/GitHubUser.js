import React, { useState, useEffect } from 'react';

export default function GitHubUser({ login }) {
  const [data, setData] = useState();

  useEffect(() => {
    if (!login) return;

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }

  return null;
}
