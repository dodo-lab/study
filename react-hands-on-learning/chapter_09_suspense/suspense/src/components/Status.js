import React from 'react';

const loadStatus = function () {
  console.log('loadStatus');
  let error, response;
  const promise = new Promise((resolve) => setTimeout(resolve, 3000))
    .then(() => {
      console.log('success');
      response = 'success';
    })
    .catch((e) => (error = e));
  return function () {
    console.log('function', error, response);
    if (error) throw error;
    if (response) return response;
    throw promise;
  };
};

const status = loadStatus();

export default function Status() {
  return <h1>status: {status()}</h1>;
}
