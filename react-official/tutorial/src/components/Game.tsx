import React, { useMemo, useState } from 'react';
import { BoardState, SquareValue } from '../interface';
import Board from './Board';

type History = {
  squares: BoardState;
};

const Game: React.FC = () => {
  const [history, setHistory] = useState<History[]>([
    { squares: Array(9).fill(null) as BoardState },
  ]);
  const [nextValue, setNextValue] = useState<SquareValue>('X');

  const current = history[history.length - 1];

  const winner = useMemo(() => {
    return calculateWinner(current.squares);
  }, [current]);

  const status = useMemo(() => {
    if (winner) {
      return `Winner: ${winner}`;
    } else {
      return `Next player: ${nextValue}`;
    }
  }, [winner, nextValue]);

  const handleClick = (i: number) => {
    if (calculateWinner(current.squares) || current.squares[i]) {
      return;
    }

    const newSquares = current.squares.slice() as BoardState;
    newSquares[i] = nextValue;

    setHistory(history.concat([{ squares: newSquares }]));
    setNextValue(nextValue === 'X' ? 'O' : 'X');
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
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

export default Game;
