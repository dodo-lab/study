import React from 'react';

export default function SimpleList({ data = [], renderItem, renderEmpty }) {
  if (!data.length) return renderEmpty;

  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
