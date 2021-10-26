import React from 'react';
import UserProfile from './components/UserProfile';
import UserSetting from './components/UserSetting';
import UserProvider from './context/UserProvider';
import ThemeProvider from './context/ThemeProvider';
import ThemeSetting from './components/ThemeSetting';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <UserProfile />
        <UserSetting />
        <ThemeSetting />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
