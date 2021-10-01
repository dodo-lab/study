import { useState, useEffect } from 'react';

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;

    setLoading(true);

    fetch(uri)
      .then((response) => response.json())
      .then(setData)
      .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return { loading, data, error };
}
