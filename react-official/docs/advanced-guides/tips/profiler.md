# プロファイラ

React アプリケーションのレンダーの頻度やコストを計測することが可能。

※詳細は[公式](https://ja.reactjs.org/docs/profiler.html)を参照

## 使用方法

計測したいコンポーネントツリーを`Profiler`コンポーネントで囲うことで、囲われたコンポーネントツリーの計測ができる。複数の`Profiler`コンポーネントを使うことや、ネストした利用も可能。

`Profiler`コンポーネントは以下２つの props が必要。

- id

  Profiler を識別するための文字列

- onRender

  計測対象のコンポーネントツリーが更新をコミットした際に毎回呼び出されるコールバック関数

実装内容は[こちら](./../sandbox/src/pages/profiler/)を参照。
