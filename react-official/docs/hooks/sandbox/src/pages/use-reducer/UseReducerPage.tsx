import { Button } from '@mui/material';
import React, { useReducer } from 'react';

type CountType = 'increment' | 'decrement';

const UseReducerPage: React.FC = () => {
  const [count, countDispatch] = useReducer(
    (count: number, type: CountType) => {
      if (type === 'increment') {
        return count + 1;
      } else {
        return count - 1;
      }
    },
    0
  );

  return (
    <>
      <p>You clicked {count} times.</p>
      <Button variant="contained" onClick={() => countDispatch('decrement')}>
        -
      </Button>
      <Button variant="contained" onClick={() => countDispatch('increment')}>
        +
      </Button>
    </>
  );
};

export default UseReducerPage;
