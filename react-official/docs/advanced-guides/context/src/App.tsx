import React from 'react';
import UserProfile from './components/UserProfile';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}

export default App;
