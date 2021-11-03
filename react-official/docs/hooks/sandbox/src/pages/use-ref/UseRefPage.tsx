import { Button, ButtonGroup, Input } from '@mui/material';
import React, { useRef } from 'react';

const UseRefPage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focus = () => {
    inputRef.current?.focus();
  };

  const input = () => {
    if (inputRef.current) {
      inputRef.current.value = 'dummy';
    }
  };

  return (
    <>
      <Input inputRef={inputRef} />
      <div style={{ marginTop: 20 }}>
        <ButtonGroup>
          <Button onClick={focus}>focus</Button>
          <Button onClick={input}>input</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default UseRefPage;
