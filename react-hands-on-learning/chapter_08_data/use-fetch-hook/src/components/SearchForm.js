import React, { useState } from 'react';

export default function SearchForm({ value, onSearch = (f) => f }) {
  const [searchValue, setSearchValue] = useState(value);

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={() => onSearch(searchValue)}>SEARCH</button>
    </div>
  );
}
