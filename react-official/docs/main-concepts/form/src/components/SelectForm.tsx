import React from 'react';
import { useInput } from '../hooks';
import CommonForm from './CommonForm';

const SelectForm: React.FC = () => {
  const flavor = useInput('coconut');

  const flavors = ['Grapefruit', 'Lime', 'Coconut', 'Mango'];

  return (
    <CommonForm value={flavor.value} label="Pick your favorite flavor">
      <select {...flavor}>
        {flavors.map((v) => (
          <option value={v.toLowerCase()}>{v}</option>
        ))}
      </select>
    </CommonForm>
  );
};

export default SelectForm;
