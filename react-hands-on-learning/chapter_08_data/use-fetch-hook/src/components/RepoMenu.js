import React, { useEffect } from 'react';
import { useIterator } from '../hooks';
import RepositoryReadme from './RepositoryReadme';

export default function RepoMenu({ repositories, login, onSelect = (f) => f }) {
  const [{ name }, prev, next] = useIterator(repositories);

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
      <RepositoryReadme login={login} repo={name} />
    </>
  );
}