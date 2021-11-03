import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const ThemeScreen: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        width: '100%',
        height: '50vh',
        backgroundColor: theme.background,
      }}
    >
      <h2 style={{ color: theme.foreground }}>ThemeScreen</h2>
    </div>
  );
};

export default ThemeScreen;
