import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const mounted = useMountedRef();

  useEffect(() => {
    if (!uri) return;
    if (!mounted) return;

    setLoading(true);

    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        if (!mounted.current) throw new Error('component is not mounted');
        setData(data);
      })
      .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
      .then(() => {
        if (!mounted.current) throw new Error('component is not mounted');
        setLoading(false);
      })
      .catch((error) => {
        if (!mounted.current) return;
        setError(error);
      });
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

export function useMountedRef() {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  return mounted;
}
