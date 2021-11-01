# ReactDOM

## [ReactDOM.render](https://ja.reactjs.org/docs/react-dom.html#render)

```js
ReactDOM.render(element, container[, callback])
```

渡された`container`の DOM に React 要素(element)をレンダーし、コンポーネントへの参照を返す。React 要素がすでに`container`にレンダーされている場合は更新を行い、最新の React 要素を反映するために必要な DOM のみを変更する。

オプションの`callback`は、コンポーネントがレンダーまたは更新された後に実行される。

## [ReactDOM.hydrate](https://ja.reactjs.org/docs/react-dom.html#hydrate)

```js
ReactDOM.hydrate(element, container[, callback])
```

`render()`と同様だが、`ReactDOMServer`により HTML コンテンツが描画されたコンテナをクライアントで再利用するために使用する。

## [ReactDOM.unmountComponentAtNode](https://ja.reactjs.org/docs/react-dom.html#unmountcomponentatnode)

```js
ReactDOM.unmountComponentAtNode(container);
```

DOM からマウントされた React コンポーネントを削除し、イベントハンドラや state をクリーンアップする。コンポーネントがアンマウントされた場合は true を返し、アンマウントすべきコンポーネントが存在しなかった場合は false を返す。

## [ReactDOM.findDOMNode](https://ja.reactjs.org/docs/react-dom.html#finddomnode)

```js
ReactDOM.findDOMNode(component);
```

DOM に指定されたコンポーネントがマウントされている場合、対応する DOM 要素を返す。コンポーネントが null や false をレンダーする場合は null を返す。

※ほとんどのケースは ref で代用可能。Strict モードでは非推奨。

## [ReactDOM.createPortal](https://ja.reactjs.org/docs/react-dom.html#createportal)

ポータルを作成する。
