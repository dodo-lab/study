import React, { memo } from 'react';

export default function Dog({ name, shout = (f) => f }) {
  console.log(`rendering Dog : ${name}`);

  return <span onClick={() => shout(name)}>{name} / </span>;
}

// 関数をプロパティで受け取っている場合は、第二引数に再描画抑止の真偽値を返すコールバック関数を指定することで再描画の抑止が可能
// nameプロパティが一致するなら、再描画を抑止
export const PureDog = memo(
  Dog,
  (prevProps, nextProps) => prevProps.name === nextProps.name
);

// 初回のみ描画
export const RenderOnceDog = memo(Dog, () => true);

// 毎回描画
export const AlwaysRenderDog = memo(Dog, () => false);

/*
  以下のように、memoとuseCallbackでも再描画を抑止することが可能

  const PureDog = memo(Dog);
  function App() {
    const shout = useCallback(name => console.log(`${name} shout!`), []);
    return <PureDog name="pure-dog" shout={shout} />
  }
*/
