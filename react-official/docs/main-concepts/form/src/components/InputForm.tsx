import React from 'react';
import { useInput } from './../hooks';
import CommonForm from './CommonForm';

const InputForm: React.FC = () => {
  const name = useInput('');

  return (
    <CommonForm value={name.value} label="Name">
      <input type="text" {...name} />
    </CommonForm>
  );
};

export default InputForm;
