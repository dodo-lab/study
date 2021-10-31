# パフォーマンス最適化

※詳細は[公式](https://ja.reactjs.org/docs/optimizing-performance.html)を参照

## 長いリストの仮想化

長いデータのリストをレンダーする場合、リスト全体から表示されている領域のみに絞って描画することで、パフォーマンス改善が見込める。具体的には生成する DOM ノードの数やコンポーネントの再描画に要する時間を大幅に削減可能。

人気があるリスト仮想化のライブラリは以下のようなものがある。

- [react-window](https://react-window.now.sh/)
- [react-virtualized](https://bvaughn.github.io/react-virtualized/)

## リコンシリエーション（差分検出処理）を避ける

React はレンダーされた UI の内部表現を構築し、維持する。その内部表現にはコンポーネントが返した React 要素も含まれる。React はこの内部表現を使うことによって、DOM ノードの不要なアクセスを回避している。

コンポーネントの props や state が変更された場合、React は新しく返された要素と以前にレンダーされたものとを比較することで、実際の DOM の更新が必要かを判断する。それらが等しくない場合、React は DOM を更新する。

上述の仕組みはあるものの、再レンダーには多少なりとも時間を要する。もし遅延が目立つ場合、再レンダープロセスが開始される前にトリガーされるライフサイクル関数`shouldComponentUpdate`をオーバーライドすることで、パフォーマンスの改善が見込める。

```js
shouldComponentUpdate(nextProps, nextState) {
  return false;
}
```

ある状況においてコンポーネントを更新する必要がないと分かっている場合、`shouldComponentUpdate`が`false`を返すことで、該当コンポーネントおよび配下のレンダー処理をスキップできる。
また、ほとんどのケースでは`shouldComponentUpdate`をオーバーライドするより、[React.PureComponent][]で実現することが多い。

[react.purecomponent]: https://ja.reactjs.org/docs/react-api.html#reactpurecomponent
