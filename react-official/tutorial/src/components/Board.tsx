import React from 'react';
import { BoardState } from './../interface';
import Square from './Square';

type BoardProps = {
  squares: BoardState;
  lines: number[];
  onClick: (i: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, lines, onClick }) => {
  const renderSquare = (i: number) => {
    const highLight = lines.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        highLight={highLight}
        onClick={() => onClick(i)}
      />
    );
  };

  return (
    <div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="border-row">
          {[...Array(3)].map((_, j) => {
            const index = i * 3 + j;
            return renderSquare(index);
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
