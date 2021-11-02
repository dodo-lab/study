import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseLayoutEffectPage: React.FC = () => {
  const [effectColor, setEffectColor] = useState('red');
  const [layoutEffectColor, setLayoutEffectColor] = useState('red');
  const layoutEffect = false;

  /**
   * useEffectはDOMの更新後、非同期的に実行される
   * そのため、リロードすると若干「赤 ⇒ 青」にちらつく
   */
  useEffect(() => {
    setEffectColor('blue');
  }, []);

  /**
   * useLayoutEffectはDOMの更新後に同期的に実行される
   * そのため、リロードしてもちらつかない
   */
  useLayoutEffect(() => {
    setLayoutEffectColor('blue');
  }, []);

  return (
    <>
      <p>コード上の'layoutEffect'のフラグを切り替えてリロードする</p>
      <p>'layoutEffect'が'false'だと赤から青へちらつくことがある</p>
      <p>
        {'※DevTools > Network の No throttling を Slow 3G にすると分かりやすい'}
      </p>
      {layoutEffect ? (
        <div
          style={{
            width: '100%',
            height: '45vh',
            backgroundColor: layoutEffectColor,
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '45vh',
            backgroundColor: effectColor,
          }}
        />
      )}
    </>
  );
};

export default UseLayoutEffectPage;
