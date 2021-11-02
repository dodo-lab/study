import { Input } from '@mui/material';
import React from 'react';
import { useInput } from './useInput';

const CustomHooksPage: React.FC = () => {
  const name = useInput('');

  return (
    <>
      <Input {...name} placeholder="name" />

      <p>Your name is '{name.value || 'unknown'}'</p>
    </>
  );
};

export default CustomHooksPage;
