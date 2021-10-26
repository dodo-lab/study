import React from 'react';
import UserProfile from './components/UserProfile';
import UserSetting from './components/UserSetting';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <UserProfile />
      <UserSetting />
    </UserProvider>
  );
}

export default App;
