import React, { useRef } from 'react';

// React の ref 機能を利用することでDOMへアクセス可能だが、イミュータブルでも宣言型でもないため、
// どうしても必要とする場合を除いて使わない方がよい
export default function AddColorFormRef({ onNewColor = (f) => f }) {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    // デフォルト動作の抑止
    e.preventDefault();

    // ユーザーの入力値を取得
    const title = txtTitle.current.value;
    const color = hexColor.current.value;

    // 親コンポーネントへ通知
    onNewColor(title, color);

    // ユーザー入力のクリア
    txtTitle.current.value = '';
    hexColor.current.value = '';
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  );
}
