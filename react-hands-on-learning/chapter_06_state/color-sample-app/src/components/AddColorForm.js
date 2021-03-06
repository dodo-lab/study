import React from 'react';
import { useInput } from './../hooks';

export default function AddColorForm({ onNewColor = (f) => f }) {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = (event) => {
    // デフォルト動作の抑止
    event.preventDefault();

    // 親コンポーネントへ通知
    onNewColor(titleProps.value, colorProps.value);

    // ユーザー入力のクリア
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title..." required />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}
