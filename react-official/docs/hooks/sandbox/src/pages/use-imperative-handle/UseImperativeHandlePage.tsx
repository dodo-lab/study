import { Button } from '@mui/material';
import React, { useRef } from 'react';
import ForwardRefInput, { Handler } from './parts/ForwardRefInput';

const UseImperativeHandlePage: React.FC = () => {
  const inputRef = useRef<Handler>(null);

  const handleClick = () => {
    inputRef.current?.dummyInput();
  };

  return (
    <>
      <ForwardRefInput ref={inputRef} />
      <Button variant="contained" onClick={handleClick}>
        Dummy input
      </Button>
    </>
  );
};

export default UseImperativeHandlePage;
