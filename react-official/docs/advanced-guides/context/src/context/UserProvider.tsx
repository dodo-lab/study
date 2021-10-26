import React, { useState } from 'react';
import { createUseContextAndProvider } from './contextUtil';

type User = {
  name: string;
  age: number;
};

type UserProviderParams = {
  user: User;
  setName: (name: string) => void;
  setAge: (age: number) => void;
};

const [useUser, UserContextProvider] =
  createUseContextAndProvider<UserProviderParams>();

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({ name: 'unknown', age: 100 });

  const setName = (name: string) =>
    setUser(Object.assign({ ...user }, { name }));

  const setAge = (age: number) => setUser(Object.assign({ ...user }, { age }));

  return (
    <UserContextProvider value={{ user, setName, setAge }}>
      {children}
    </UserContextProvider>
  );
};

export default UserProvider;
export { useUser };
