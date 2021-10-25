import React from 'react';
import { useInput } from '../hooks';
import CommonForm from './CommonForm';

const TextareaForm: React.FC = () => {
  const essay = useInput(
    'Please write an essay about your favorite DOM element'
  );

  return (
    <CommonForm value={essay.value} label="Essay">
      <textarea {...essay} />
    </CommonForm>
  );
};

export default TextareaForm;
