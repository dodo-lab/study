import React, { useState, useEffect, useLayoutEffect } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return [width, height];
};

const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({ x, y }) => {
    setX(x);
    setY(y);
  };

  useLayoutEffect(() => {
    window.addEventListener('mousemove', setPosition);
    return () => window.removeEventListener('mousemove', setPosition);
  }, []);

  return [x, y];
};

// useEffectとuseLayoutEffectで設定した副作用は実行されるタイミングが違う
// 1. コンポーネントの描画関数がコールされる
// 2. useLayoutEffectで設定した副作用関数がコールされる
// 3. ブラウザのPain処理によってコンポーネントの描画結果が画面に反映される
// 4. useEffectで設定した副作用関数がコールされる
export default function UseLayoutEffect() {
  console.log('UseLayoutEffect exec');

  const [width, height] = useWindowSize();
  const [x, y] = useMousePosition();

  useEffect(() => console.log('use effect'));
  useLayoutEffect(() => console.log('use layout effect', width, height, x, y));

  return <div>ready</div>;
}
