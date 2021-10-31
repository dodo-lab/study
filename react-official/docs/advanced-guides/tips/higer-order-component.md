# 高階コンポーネント

高階コンポーネント(higher-order component：HOC)はコンポーネントのロジックを再利用するための、React における応用テクニック。これは React API の一部ではなく、あくまで設計パターンの１つ。

実装内容は[こちら](./../sandbox/src/pages/higher-order-components/)を参照。

※詳細は[公式](https://ja.reactjs.org/docs/higher-order-components.html)を参照

## 注意事項

- 静的メソッドは必ずコピーすること

  HOC をコンポーネントに適用すると、元のコンポーネントはラップされる。つまりラップしたコンポーネントは元のコンポーネントの静的メソッドを１つも持っていないということになる。
  この問題の解決策としては、[hoist-non-react-statics](https://github.com/mridgway/hoist-non-react-statics)を使用することで、すべての非 React の静的メソッドを自動的にコピーできる。

- ref 属性は渡されない

  HOC の通例として、すべての props はラップされたコンポーネントに渡されるが、ref に関しては渡されない。この解決方法は、[React.forwardRef][]を利用すること。
