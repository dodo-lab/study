import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import AddColorForm from './components/AddColorForm';
import ColorDetails from './components/ColorDetails';
import ColorList from './components/ColorList';
import ColorProvider from './components/ColorProvider';

function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Link to="/83c7ba2f-7392-4d7d-9e23-35adbe186046">Details</Link>
      <Routes>
        <Route path="/" element={<ColorList />} />
        <Route path=":id" element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  );
}

export default App;
