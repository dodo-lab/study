import React from 'react';
import { useTheme } from '../context/ThemeProvider';
import { useUser } from '../context/UserProvider';
import './UserProfile.css';

const UserProfile: React.FC = () => {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <div className={theme.color}>
      <h2>User Profile</h2>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </div>
  );
};

export default UserProfile;
