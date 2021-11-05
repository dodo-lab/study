import React, { useState, useEffect } from 'react';

export type UserInfo = {
  name: string;
  age: number;
  address: string;
};

export default function User(props: { id: string }) {
  const [user, setUser] = useState<UserInfo | null>(null);

  async function fetchUserData(id: string) {
    const response = await fetch('/' + id);
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return <p>loading...</p>;
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  );
}
