import React from 'react';
import { useUser } from '../context/UserProvider';

const UserProfile: React.FC = () => {
  const { user } = useUser();

  return (
    <div>
      <h2>User Profile</h2>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </div>
  );
};

export default UserProfile;
