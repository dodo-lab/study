import React, { useState } from 'react';

export const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);
  return {
    value,
    onChange: (event: React.ChangeEvent<HTMLElement>) => {
      const { target } = event;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        setValue(target.value);
      }
    },
  };
};
