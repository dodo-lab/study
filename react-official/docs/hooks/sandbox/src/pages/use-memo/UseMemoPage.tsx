import { Button, Divider, Input } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useInput } from '../custom-hooks/useInput';

const calcTotal = (num: number) => {
  let total = 0;
  for (let i = 1; i <= num; ++i) {
    total += i;
  }

  return total;
};

const UseMemoPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const number = useInput('20');

  const memoTotal = useMemo(() => {
    console.log('total(useMemo)');

    return calcTotal(parseInt(number.value));
  }, [number.value]);

  const total = () => {
    console.log('total');
    return calcTotal(parseInt(number.value));
  };

  return (
    <>
      <div>
        <p>You clicked {count} times.</p>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </div>
      <Divider sx={{ marginY: 3 }} />

      <Input type="number" {...number} />
      <p>
        add 1 to {number.value} ： {memoTotal}
      </p>
      <p>
        add 1 to {number.value} (useMemo) ： {total()}
      </p>
    </>
  );
};

export default UseMemoPage;
