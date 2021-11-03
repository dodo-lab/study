import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import ThemeScreen from './parts/ThemeScreen';
import ThemeSettings from './parts/ThemeSettings';

const UseContextPage: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemeScreen />
      <ThemeSettings />
    </ThemeProvider>
  );
};

export default UseContextPage;
