import React from 'react';
import { BoardState } from './../interface';
import Square from './Square';

type BoardProps = {
  squares: BoardState;
  onClick: (i: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      {[...Array(3)].map((_, i) => (
        <div className="border-row">
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
