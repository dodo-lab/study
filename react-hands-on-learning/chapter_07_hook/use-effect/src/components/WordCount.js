import React, { useState, useEffect, useMemo } from 'react';

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener('keydown', forceRender);
    return () => window.removeEventListener('keydown', forceRender);
  }, []);
};

export default function WorkCount({ children }) {
  useAnyKeyToRender();

  // const words = children.split(' ');
  // 上記の words を useEffect の第二引数に指定すると、毎回描画されたと判断してしまう
  // そのため、配列を useEffect の第二引数に使いたい場合は、useMemoでメモ化された値を使う
  const words = useMemo(() => {
    const words = children.split(' ');
    return words;
  }, [children]);

  useEffect(() => {
    console.log('fresh render', words);
  }, [words]);

  return <></>;
}
