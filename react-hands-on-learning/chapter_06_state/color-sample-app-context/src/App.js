import React, { useState } from 'react';
import colorData from './color-data.json';
import AddColorFormRef from './components/AddColorFormRef';
import ColorList from './components/ColorList';
import { v4 } from 'uuid';

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <AddColorFormRef
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ];
          setColors(newColors);
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) => (color.id === id ? { ...color, rating } : color));
          setColors(newColors);
        }}
      />
    </>
  );
}

export default App;
