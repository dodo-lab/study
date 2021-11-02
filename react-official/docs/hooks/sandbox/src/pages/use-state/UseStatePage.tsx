import { Button } from '@mui/material';
import React, { useState } from 'react';

const UseStatePage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </>
  );
};

export default UseStatePage;
