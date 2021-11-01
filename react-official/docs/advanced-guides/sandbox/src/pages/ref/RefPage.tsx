import { Button, Card, CardContent, CardHeader, Input } from '@mui/material';
import React, { createRef, useCallback, useEffect } from 'react';

const RefPage: React.FC = () => {
  const muiInputRef = createRef<HTMLInputElement>();
  const inputRef = createRef<HTMLInputElement>();

  const muiInputFocus = useCallback(() => {
    console.log('muiInputFocus');
    muiInputRef.current?.focus();
  }, [muiInputRef]);

  const inputFocus = useCallback(() => {
    console.log('inputFocus');
    inputRef.current?.focus();
  }, [inputRef]);

  useEffect(() => {
    muiInputFocus();
  }, [muiInputFocus]);

  return (
    <>
      <Card>
        <CardHeader title="Material UI Input × Ref" />
        <CardContent>
          <Input placeholder="focus" inputRef={muiInputRef} />
          <Button variant="contained" onClick={muiInputFocus}>
            Focus
          </Button>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: 5 }}>
        <CardHeader title="input × Ref" />
        <CardContent>
          <input placeholder="focus" ref={inputRef} />
          <Button variant="contained" onClick={inputFocus}>
            Focus
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default RefPage;
