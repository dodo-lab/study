import React, { useEffect, useState } from 'react';

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`checked: ${checked.toString()}`);
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={(e) => setChecked(!checked)}
      />
      {checked ? 'checked' : 'not checked'}
    </>
  );
}
