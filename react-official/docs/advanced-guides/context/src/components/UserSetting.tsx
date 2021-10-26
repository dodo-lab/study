import React, { useState } from 'react';
import { useUser } from '../context/UserProvider';

const UserSetting: React.FC = () => {
  const { user, setName, setAge } = useUser();
  const [editName, setEditName] = useState(user.name);
  const [editAge, setEditAge] = useState(user.age);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEditName(e.target.value);
  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEditAge(parseInt(e.target.value));

  return (
    <div>
      <h2>User Setting</h2>
      <div>
        <input type="text" value={editName} onChange={handleChangeName} />
        <button onClick={() => setName(editName)}>更新</button>
      </div>
      <div>
        <input type="number" value={editAge} onChange={handleChangeAge} />
        <button onClick={() => setAge(editAge)}>更新</button>
      </div>
    </div>
  );
};

export default UserSetting;
