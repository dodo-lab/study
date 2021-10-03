import React from 'react';

export default function Agreement({ onAgree = (f) => f }) {
  return (
    <div>
      <p>Trems...</p>
      <p>These are the terms and stuff. Do you agrre?</p>
      <button onClick={onAgree}>I agree</button>
    </div>
  );
}
