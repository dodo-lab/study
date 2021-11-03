import { Button } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const HeavyButton: React.FC<Props> = ({ children, onClick }) => {
  console.log(`render HeavyButton: ${children}`);
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};

export default HeavyButton;
