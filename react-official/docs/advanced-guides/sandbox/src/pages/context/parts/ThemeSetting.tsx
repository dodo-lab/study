import React from 'react';
import { ThemeColor, useTheme } from '../context/ThemeProvider';

const ThemeSetting: React.FC = () => {
  const { theme, setColor } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setColor(e.target.value as ThemeColor);

  return (
    <div>
      <h2>Theme Setting</h2>
      <select
        title="Theme Color Select"
        value={theme.color}
        onChange={handleChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  );
};

export default ThemeSetting;
