import { Button, Card, CardContent, CardHeader } from '@mui/material';
import React, { useCallback, useState } from 'react';
import HeavyButton from './parts/HeavyButton';

const MemoHeavyButton = React.memo(HeavyButton);

const UseCallbackPage: React.FC = () => {
  const [count, setCount] = useState(0);

  const countMessage = useCallback(() => {
    console.log(`countMessage call: ${count}`);
    return <p>You clicked {count} times.</p>;
  }, [count]);

  const handleClick = () => {
    console.log(`clicked`);
  };

  const handleClickCallback = useCallback(() => {
    console.log(`callback clicked`);
  }, []);

  return (
    <>
      {countMessage()}
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Count up
      </Button>
      <Card color="red" sx={{ backgroundColor: '#f0f0f0', marginTop: 2 }}>
        <CardHeader title="通常コンポーネント" />
        <CardContent>
          <HeavyButton onClick={handleClick}>Heavy Button</HeavyButton>
          <HeavyButton onClick={handleClickCallback}>
            Heavy Button Callback
          </HeavyButton>
        </CardContent>
      </Card>
      <Card color="red" sx={{ backgroundColor: '#f0f0f0', marginTop: 2 }}>
        <CardHeader title="memoコンポーネント" />
        <CardContent>
          <MemoHeavyButton onClick={handleClick}>
            Memo Heavy Button
          </MemoHeavyButton>
          <MemoHeavyButton onClick={handleClickCallback}>
            MemoHeavy Button Callback
          </MemoHeavyButton>
        </CardContent>
      </Card>
    </>
  );
};

export default UseCallbackPage;
