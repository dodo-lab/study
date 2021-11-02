import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const UseEffectPage: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [doubleClick, setDoubleClick] = useState(0);

  // clickCountのeffect
  useEffect(() => {
    console.log('clickCount effect');
    document.title = `You clicked ${clickCount} times`;

    /**
     * クリーンアップ用のメソッドを返すと、以下のタイミングでクリーンアップメソッドが実行される
     *  - コンポーネントのアンマンウント時
     *  - 第２引数の指定次第で条件が変わる
     *     - 第２引数指定なし：コンポーネントの再レンダー時
     *     - 第２引数指定あり：引数に指定したプロパティの更新時
     *       　　　　　　　　　空配列を指定すると、コンポーネントのアンマウント時のみとなる
     */
    return () => {
      console.log('clickCount effect cleanup');
      document.title = 'React App';
    };
  }, [clickCount]);

  // mountとunmountのeffect
  useEffect(() => {
    console.log('mount effect');
    return () => {
      console.log('unmount effect');
    };
  }, []);

  // updateのeffect
  useEffect(() => {
    console.log('update effect');
    return () => {
      console.log('update cleanup effect');
    };
  });

  return (
    <>
      <p>You clicked {clickCount} times</p>
      <Button variant="contained" onClick={() => setClickCount(clickCount + 1)}>
        Click me
      </Button>

      <p>You double clicked {doubleClick} times</p>
      <Button
        variant="contained"
        onDoubleClick={() => setDoubleClick(doubleClick + 1)}
      >
        Double Click me
      </Button>
    </>
  );
};

export default UseEffectPage;
