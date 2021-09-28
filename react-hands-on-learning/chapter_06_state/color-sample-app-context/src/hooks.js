import { useState } from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    // inputタグに対してスプレッド構文で渡せるオブジェクトを用意
    { value, onChange: (e) => setValue(e.target.value) },
    // 初期値でリセットするメソッドを用意
    () => setValue(initialValue),
  ];
};
