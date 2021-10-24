import React, { useMemo, useState } from 'react';
import { BoardState, SquareValue } from '../interface';
import Board from './Board';

type History = {
  squares: BoardState;
  position: number;
};

const Game: React.FC = () => {
  const [histories, setHistories] = useState<History[]>([
    { squares: Array(9).fill(null) as BoardState, position: 0 },
  ]);
  const [nextValue, setNextValue] = useState<SquareValue>('X');
  const [stepNumber, setStepNumber] = useState(0);

  const current = histories[stepNumber];

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

  const moves = histories.map((history, move) => {
    const { col, row } = calcPosition(history.position);
    const desc = move
      ? `Go to move #${move} (${col}, ${row})`
      : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  function calcPosition(position: number) {
    const col = Math.floor(position / 3);
    const row = position % 3;
    return { col, row };
  }

  function handleClick(i: number) {
    if (calculateWinner(current.squares) || current.squares[i]) {
      return;
    }

    const newHistories = histories.slice(0, stepNumber + 1);
    const newSquares = current.squares.slice() as BoardState;
    newSquares[i] = nextValue;

    setHistories(newHistories.concat([{ squares: newSquares, position: i }]));
    setNextValue(nextValue === 'X' ? 'O' : 'X');
    setStepNumber(newHistories.length);
  }

  function jumpTo(step: number) {
    setStepNumber(step);
    setNextValue(step % 2 === 0 ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
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
