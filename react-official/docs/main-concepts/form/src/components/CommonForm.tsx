import React from 'react';

type Props = {
  value: string;
  label: string;
};

const CommonForm: React.FC<Props> = ({ value, label, children }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert(value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {label}: {children}
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CommonForm;
