import React, { useReducer } from 'react';

const firstUser = {
  id: '0391-3233-3201',
  firstName: 'Bill',
  lastName: 'Wilson',
  city: 'Missoula',
  state: 'Montana',
  email: 'bwilson@mtnwilsons.com',
  admin: false,
};

export default function ReducerStateManagement() {
  // ユーザー情報を更新する箇所すべてにスプレッド構文で記述するのは冗長で、不具合を生む原因にもなる
  // そのため、useReducerを使った方が簡潔で間違いが起こりにくい
  const [user, setUser] = useReducer(
    (user, newDetails) => ({ ...user, ...newDetails }),
    firstUser
  );

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? 'Admin' : 'User'}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button
        onClick={() => {
          setUser({ admin: true });
        }}
      >
        Make Admin
      </button>
    </div>
  );
}
