import React from 'react';
import { MousePosition } from './Mouse';

type Props = {
  mouse: MousePosition;
};

const Cat: React.FC<Props> = ({ mouse }) => {
  return (
    <p style={{ position: 'absolute', left: mouse.x, top: mouse.y }}>Cat</p>
  );
};

export default Cat;
