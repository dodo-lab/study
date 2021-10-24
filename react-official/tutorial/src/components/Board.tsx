import React, { useState, useMemo } from 'react';
import { Repeat } from 'typescript-tuple';
import { SquareValue } from './../interface';
import Square from './Square';

type BoardState = Repeat<SquareValue, 9>;

const Board: React.FC = () => {
  const [squares, setSquares] = useState<BoardState>(
    Array(9).fill(null) as BoardState
  );
  const [nextValue, setNextValue] = useState<SquareValue>('X');

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = squares.slice() as BoardState;
    newSquares[i] = nextValue;

    setSquares(newSquares);
    setNextValue(nextValue === 'X' ? 'O' : 'X');
  };

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = useMemo(() => {
    return calculateWinner(squares);
  }, [squares]);

  const status = useMemo(() => {
    if (winner) {
      return `Winner: ${winner}`;
    } else {
      return `Next player: ${nextValue}`;
    }
  }, [winner, nextValue]);

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

function calculateWinner(squares: SquareValue[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
