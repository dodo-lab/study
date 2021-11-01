import React, { useState } from 'react';

export type MousePosition = {
  x: number;
  y: number;
};

type Props = {
  render: (pos: MousePosition) => React.ReactNode;
  children: React.ReactNode;
};

const Mouse: React.FC<Props> = ({ render, children }) => {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setPos({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {children}
      {render(pos)}
    </div>
  );
};

export default Mouse;
