import React, { useState } from 'react';
import { createUseContextAndProvider } from './contextUtil';

export type Theme = {
  foreground: string;
  background: string;
};

export const themeTypes = ['light', 'dark'] as const;
export type ThemeType = typeof themeTypes[number];

type ThemeObjects = {
  [key in ThemeType]: Theme;
};

type ThemeContext = {
  themeType: ThemeType;
  theme: Theme;
  setThemeType: (themeType: ThemeType) => void;
};

const themes: ThemeObjects = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const [useTheme, ThemeContextProvider] =
  createUseContextAndProvider<ThemeContext>();

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeType, setThemeTypeState] = useState<ThemeType>('light');
  const [theme, setThemeState] = useState(themes[themeType]);

  const setThemeType = (type: ThemeType) => {
    setThemeTypeState(type);
    setThemeState(themes[type]);
  };

  return (
    <ThemeContextProvider value={{ themeType, theme, setThemeType }}>
      {children}
    </ThemeContextProvider>
  );
};

export default ThemeProvider;

export { useTheme };
