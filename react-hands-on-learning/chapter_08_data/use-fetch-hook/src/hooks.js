import { useState, useEffect, useCallback, useMemo } from 'react';

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

export function useIterator(items = [], initialValue = 0) {
  const [index, setIndex] = useState(initialValue);

  const prev = useCallback(() => {
    if (index === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  }, [index, items.length]);

  const next = useCallback(() => {
    if (index === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, [index, items.length]);

  const item = useMemo(() => items[index], [index]);

  return [item || items[0], prev, next];
}
