import React, { useState } from 'react';

export const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);
  return {
    value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setValue(event.target.value),
  };
};
