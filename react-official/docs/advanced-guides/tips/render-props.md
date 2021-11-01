# レンダープロップ

値が関数の props を使って、コンポーネント間でコードを共有するためのテクニック。

※詳細は[公式](https://ja.reactjs.org/docs/render-props.html)を参照

## 実装方法

レンダープロップを持つコンポーネントは、自身がレンダーロジックを実装する代わりに、React 要素を返す関数を props で受け取ってそれを呼び出す。

実装内容は[こちら](./../sandbox/src/pages/render-props/)を参照。
