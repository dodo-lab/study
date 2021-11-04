import { Input } from '@mui/material';
import React from 'react';
import { useClientRect } from './useClientRect';
import { useInput } from './useInput';
import { usePrevious } from './usePrevious';

const CustomHooksPage: React.FC = () => {
  const name = useInput('');
  const prevName = usePrevious(name.value);
  const [rect, rectRef] = useClientRect();

  return (
    <>
      <div ref={rectRef}>
        <Input {...name} placeholder="name" />

        <p>Your name is '{name.value || 'unknown'}'</p>
        <p>Your previous name is '{prevName || 'unknown'}'</p>
        <p>
          Rect pos [x:{rect?.x}, y:{rect?.y}]
        </p>
        <p>
          Rect size [width:{rect?.width}, height:{rect?.height}]
        </p>
      </div>
    </>
  );
};

export default CustomHooksPage;
