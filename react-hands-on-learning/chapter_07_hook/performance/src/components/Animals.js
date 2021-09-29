import React from 'react';

export default function Animals({
  animals = [],
  createAnimal = (f) => f,
  addAnimal = (f) => f,
}) {
  return (
    <div>
      {animals.map((name, i) => {
        return createAnimal(name, i);
      })}
      <button onClick={() => addAnimal(prompt('Name a cat'))}>
        Add a Animal
      </button>
    </div>
  );
}
