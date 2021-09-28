import React from 'react';
import Color from './Color';

export default function ColorList({ colors = {}, onRemoveColor = (f) => f }) {
  if (!colors.length) {
    return <div>No Colors Listed. (Add a Color)</div>;
  }

  return (
    <div>
      {colors.map((color, i) => (
        <Color key={i} {...color} onRemove={onRemoveColor} />
      ))}
    </div>
  );
}
