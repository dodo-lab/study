# React の最上位 API

## [React.Component](https://ja.reactjs.org/docs/react-api.html#reactcomponent)

コンポーネントの基底クラス。

## [React.PureComponent](https://ja.reactjs.org/docs/react-api.html#reactpurecomponent)

`React.Component`と似ている。違いは、`React.Component`が [shouldComponentUpdate()](https://ja.reactjs.org/docs/react-component.html#shouldcomponentupdate) を実装していないことに対して、`React.PureComponent`は props と state を浅く(shallow)比較することでそれを実装している。

## [React.memo](https://ja.reactjs.org/docs/react-api.html#reactmemo)

高階コンポーネント。あるコンポーネントが同じ props を与えられた時に同じ結果をレンダーする場合、`React.memo`でコンポーネントをラップすることによりパフォーマンスの向上が見込める。

`React.memo`はレンダーの結果と props を記憶している。渡された props が前回と同じか比較し、同じと判断した場合に前回のレンダー結果を再利用する。

デフォルトでは props オブジェクト内の複雑なオブジェクトは浅い比較のみ行われる。もし比較を制御したい場合は第２引数でカスタム比較関数を指定できる。また、比較対象としては props のみで、state やコンテキストの更新による再レンダーは発生する。

## [React.createElement](https://ja.reactjs.org/docs/react-api.html#createelement)

与えられた型の新しい React 要素を返す。JSX で書かれたコードは、`React.createElement()`を用いるコードに変換される。

## [React.cloneElement](https://ja.reactjs.org/docs/react-api.html#cloneelement)

```js
React.cloneElement(element, [props], [...children]);
```

第一引数の`element`から新しい React 要素を複製して返す。結果の要素は元の要素の props と新しい props が浅くマージされたものを持つ。新しい子要素(children)は既存の子要素をを置き換える。key と ref は元の要素から保持される。

## [React.isValidElement](https://ja.reactjs.org/docs/react-api.html#isvalidelement)

受け取ったオブジェクトが React 要素であることを確認する。

## [React.Children](https://ja.reactjs.org/docs/react-api.html#reactchildren)

データ構造が非公開の`this.props.children`を扱うためのユーティリティを提供する。

- [React.Children.map](https://ja.reactjs.org/docs/react-api.html#reactchildrenmap)
- [React.Children.forEach](https://ja.reactjs.org/docs/react-api.html#reactchildrenforeach)
- [React.Children.count](https://ja.reactjs.org/docs/react-api.html#reactchildrencount)
- [React.Children.only](https://ja.reactjs.org/docs/react-api.html#reactchildrenonly)
- [React.Children.toArray](https://ja.reactjs.org/docs/react-api.html#reactchildrentoarray)

## [React.createRef](https://ja.reactjs.org/docs/react-api.html#reactcreateref)

ref を作成する。

## [React.forwardRef](https://ja.reactjs.org/docs/react-api.html#reactforwardref)

ref を配下のツリーの別コンポーネントに受け渡す React コンポーネントを作成する。

## [React.lazy](https://ja.reactjs.org/docs/react-api.html#reactlazy)

動的に読み込まれるコンポーネントを定義できる。これにより、バンドルサイズを削減して、最初のレンダー時に使用されないコンポーネントを遅延ローディングする。

```js
const SomeComponent = React.lazy(() => import('./SomeComponent'));
```

※`lazy`コンポーネントをレンダーするには、`<React.Suspense>`がレンダリングツリーの上位に必要。

## [React.Suspense](https://ja.reactjs.org/docs/react-api.html#reactsuspense)

`<React.Suspense>`配下にレンダーの準備ができていないコンポーネントがある時のローディングインジケータを指定できる。

```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}
```
