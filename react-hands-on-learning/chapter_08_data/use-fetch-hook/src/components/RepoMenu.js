import React, { useEffect } from 'react';
import { useIterator } from '../hooks';

export default function RepoMenu({
  repositories,
  selected,
  onSelect = (f) => f,
}) {
  const [{ name }, prev, next] = useIterator(
    repositories,
    selected
      ? repositories.findIndex((repo) => repo.name == selected)
      : undefined
  );

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name, onSelect]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={prev}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
    </>
  );
}
