import React from 'react';
import { useInput } from './../hooks';

const InputForm: React.FC = () => {
  const nameInput = useInput('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert(`A name was submitted: ${nameInput.value}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" {...nameInput} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default InputForm;
