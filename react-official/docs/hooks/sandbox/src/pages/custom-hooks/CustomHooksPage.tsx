import { Input } from '@mui/material';
import React from 'react';
import { useInput } from './useInput';
import { usePrevious } from './usePrevious';

const CustomHooksPage: React.FC = () => {
  const name = useInput('');
  const prevName = usePrevious(name.value);

  return (
    <>
      <Input {...name} placeholder="name" />

      <p>Your name is '{name.value || 'unknown'}'</p>
      <p>Your previous name is '{prevName || 'unknown'}'</p>
    </>
  );
};

export default CustomHooksPage;
