import React from 'react';
import { useParams } from 'react-router';
import { useColors } from './ColorProvider';

export default function ColorDetails() {
  const { id } = useParams();
  const { colors } = useColors();

  const foundColor = colors.find((color) => color.id === id);
  console.log(foundColor);

  return (
    <div>
      <div
        style={{
          backgroundColor: foundColor.color,
          height: 100,
          width: 100,
        }}
      ></div>
      <h1>{foundColor.title}</h1>
      <h2>{foundColor.color}</h2>
    </div>
  );
}
