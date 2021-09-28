import React from 'react';
import { useInput } from './../hooks';
import { useColors } from './ColorProvider';

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const { addColor } = useColors();

  const submit = (event) => {
    // デフォルト動作の抑止
    event.preventDefault();

    // 色の追加
    addColor(titleProps.value, colorProps.value);

    // ユーザー入力のクリア
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}
