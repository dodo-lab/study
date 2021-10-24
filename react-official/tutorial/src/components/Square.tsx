import React, { CSSProperties } from 'react';
import { SquareValue } from './../interface';

interface SquareProps {
  value: SquareValue;
  highLight: boolean;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, highLight, onClick }) => {
  const style: CSSProperties = highLight ? { color: 'red' } : {};

  return (
    <button className="square" style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
