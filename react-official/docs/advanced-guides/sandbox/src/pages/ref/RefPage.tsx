import { Button, Input } from '@mui/material';
import React, { createRef, useCallback, useEffect } from 'react';

const RefPage: React.FC = () => {
  const inputRef = createRef<HTMLInputElement>();

  const inputFocus = useCallback(() => {
    console.log('inputFocus');
    inputRef.current?.focus();
  }, [inputRef]);

  useEffect(() => {
    inputFocus();
  }, [inputFocus]);

  return (
    <>
      <Input placeholder="focus" inputRef={inputRef} />
      <Button variant="contained" onClick={inputFocus}>
        Focus
      </Button>
    </>
  );
};

export default RefPage;
