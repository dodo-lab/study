import React from 'react';

function createResource(pending) {
  let error, response;
  pending.then((r) => (response = r)).catch((e) => (error = e));
  return {
    read() {
      if (error) throw error;
      if (response) return response;
      throw pending;
    },
  };
}

const threeSecondsToGnar = new Promise((resolve) =>
  setTimeout(() => resolve({ gnar: 'gnarly!' }), 3000)
);

const resource = createResource(threeSecondsToGnar);

export default function Status() {
  const result = resource.read();
  return <h1>Gnar: {result.gnar}</h1>;
}
