import React, { useState } from 'react';

export default function AddColorForm({ onNewColor = (f) => f }) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = (event) => {
    // デフォルト動作の抑止
    event.preventDefault();

    // 親コンポーネントへ通知
    onNewColor(title, color);

    // ユーザー入力のクリア
    setTitle('');
    setColor('');
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  );
}
