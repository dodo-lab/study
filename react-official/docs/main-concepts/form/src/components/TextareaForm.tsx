import React from 'react';
import { useInput } from '../hooks';

const TextareaForm: React.FC = () => {
  const essayInput = useInput(
    'Please write an essay about your favorite DOM element'
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert(`An essay was submitted: ${essayInput.value}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay: <textarea {...essayInput} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TextareaForm;
