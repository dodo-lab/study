import { Divider } from '@mui/material';
import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import UserProvider from './context/UserProvider';
import ThemeSetting from './parts/ThemeSetting';
import UserProfile from './parts/UserProfile';
import UserSetting from './parts/UserSetting';

const ContextPage: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <UserProfile />
        <Divider />
        <UserSetting />
        <ThemeSetting />
      </UserProvider>
    </ThemeProvider>
  );
};

export default ContextPage;
