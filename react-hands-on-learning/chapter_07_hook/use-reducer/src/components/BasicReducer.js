import React, { useEffect, useReducer } from 'react';

export default function BasicReducer() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  const [number, addNumber] = useReducer((current, add) => current + add, 0);

  useEffect(() => {
    console.log(`checked: ${checked.toString()}`);
  }, [checked]);

  return (
    <>
      <div>
        <input type="checkbox" value={checked} onChange={toggle} />
        {checked ? 'checked' : 'not checked'}
      </div>
      <div>
        <button onClick={() => addNumber(5)}>ADD</button>
        {number}
      </div>
    </>
  );
}
