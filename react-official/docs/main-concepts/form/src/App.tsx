import React from 'react';
import InputForm from './components/InputForm';
import TextareaForm from './components/TextareaForm';
import './App.css';
import SelectForm from './components/SelectForm';

function App() {
  return (
    <div className="App">
      <InputForm />
      <TextareaForm />
      <SelectForm />
    </div>
  );
}

export default App;
