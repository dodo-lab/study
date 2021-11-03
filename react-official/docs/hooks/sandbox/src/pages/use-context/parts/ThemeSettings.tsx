import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { ThemeType, themeTypes, useTheme } from '../context/ThemeProvider';

const ThemeSettings: React.FC = () => {
  const { themeType, setThemeType } = useTheme();

  const handleChange = (event: SelectChangeEvent<ThemeType>) => {
    setThemeType(event.target.value as ThemeType);
  };

  return (
    <>
      <h2>Theme Settings</h2>
      <Select value={themeType} onChange={handleChange}>
        {themeTypes.map((themeType) => (
          <MenuItem key={themeType} value={themeType}>
            {themeType}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default ThemeSettings;
