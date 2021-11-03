import { Input } from '@mui/material';
import React, { useImperativeHandle, useRef } from 'react';

export type Handler = {
  dummyInput: () => void;
};

const ForwardRefInput = React.forwardRef<Handler>(function ForwardRefInput(
  props,
  ref
) {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    dummyInput: () => {
      if (inputRef.current) {
        inputRef.current.value = 'dummy';
      }
    },
  }));

  return <Input type="text" inputRef={inputRef} />;
});

export default ForwardRefInput;
