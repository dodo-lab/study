import React from 'react';

const loadStatus = () => {
  // return 'success - ready';
  // throw new Error('something went wrong');
  console.log('loadStatus');
  throw new Promise((resolve) => setTimeout(resolve, 3000));
};

export default function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>;
}
