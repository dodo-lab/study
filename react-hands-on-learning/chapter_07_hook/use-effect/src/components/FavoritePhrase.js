import React, { useState, useEffect } from 'react';

export default function FavoritePhrase({ no }) {
  const [val, setVal] = useState('');
  const [phrase, setPhrase] = useState('example phrase');

  const createPhrase = () => {
    setPhrase(val);
    setVal('');
  };

  // 2番目の引数に依存配列を指定することで、副作用が実行される条件を指定可能
  useEffect(() => {
    console.log(`${no}:typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`${no}:saved phrase: "${phrase}"`);
  }, [phrase]);

  // val, phraseのいずれかの副作用を実行したい場合は両方指定
  useEffect(() => {
    console.log(`${no}:either val or phrase has changed`);
  }, [val, phrase]);

  // 空配列は初回描画時のみ実行される
  // 戻り値の関数はコンポーネントがツリーからアンマウントされた際に実行される
  useEffect(() => {
    console.log(`${no}:first draw`);
    return () => console.log(`${no}:component unmount`);
  }, []);

  return (
    <div>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </div>
  );
}
