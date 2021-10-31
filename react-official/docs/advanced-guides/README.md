# React 公式 ADVANCED GUIDES

React 公式の[ADVANCED GUIDES](https://ja.reactjs.org/docs/accessibility.html)を見て個人的に重要と感じたポイントをまとめる。

- [コード分割](./tips/code-division.md)
- [コンテキスト](./tips/context.md)
- [Error Boundary](./tips/error-boundary.md)
- [ref のフォワーディング](./tips/ref-forwarding.md)
- [フラグメント](./tips/fragment.md)
- [高階コンポーネント](./tips/higer-order-component.md)
- [JSX](./tips/jsx.md)
- [パフォーマンスの最適化](./tips/performance.md)

## ポータル

親コンポーネントの DOM 階層外にある DOM ノードに対して、子コンポーネントをレンダーするための仕組み。[ReactDOM.createPortal](https://ja.reactjs.org/docs/react-dom.html#createportal)を利用することで実現する。

実装内容は[こちら](./sandbox/src/pages/portal/)を参照。

※詳細は[公式](https://ja.reactjs.org/docs/portals.html)を参照
