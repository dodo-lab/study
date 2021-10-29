import React, { useState } from 'react';
import { createUseContextAndProvider } from './contextUtil';

export type ThemeColor = 'light' | 'dark';

type Theme = {
  color: ThemeColor;
};

type ThemeProviderParams = {
  theme: Theme;
  setColor: (color: ThemeColor) => void;
};

const [useTheme, ThemeContextProvider] =
  createUseContextAndProvider<ThemeProviderParams>();

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({ color: 'light' });

  const setColor = (color: ThemeColor) =>
    setTheme(Object.assign({ ...theme }, { color }));

  return (
    <ThemeContextProvider value={{ theme, setColor }}>
      {children}
    </ThemeContextProvider>
  );
};

export default ThemeProvider;
export { useTheme };
