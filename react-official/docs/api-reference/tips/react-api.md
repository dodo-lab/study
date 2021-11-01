# React の最上位 API

## [React.Component](https://ja.reactjs.org/docs/react-api.html#reactcomponent)

コンポーネントの基底クラス。

## [React.PureComponent](https://ja.reactjs.org/docs/react-api.html#reactpurecomponent)

`React.Component`と似ている。違いは、`React.Component`が [shouldComponentUpdate()](https://ja.reactjs.org/docs/react-component.html#shouldcomponentupdate) を実装していないことに対して、`React.PureComponent`は props と state を浅く(shallow)比較することでそれを実装している。

## [React.memo](https://ja.reactjs.org/docs/react-api.html#reactmemo)

高階コンポーネント。あるコンポーネントが同じ props を与えられた時に同じ結果をレンダーする場合、`React.memo`でコンポーネントをラップすることによりパフォーマンスの向上が見込める。

`React.memo`はレンダーの結果と props を記憶している。渡された props が前回と同じか比較し、同じと判断した場合に前回のレンダー結果を再利用する。

デフォルトでは props オブジェクト内の複雑なオブジェクトは浅い比較のみ行われる。もし比較を制御したい場合は第２引数でカスタム比較関数を指定できる。また、比較対象としては props のみで、state やコンテキストの更新による再レンダーは発生する。
