# ref のフォワーディング

ref のフォワーディングはあるコンポーネントを通じて、その子コンポーネントのひとつに ref を渡すテクニック。これは基本的にはアプリケーション内のほとんどのコンポーネントで必要ない。ただし、コンポーネントの種類によっては使用した方が良いケースもある。特に再利用可能なコンポーネントライブラリにおいては、便利なものとなるかもしれない。

※詳細は[公式](https://ja.reactjs.org/docs/forwarding-refs.html)を参照

## ref のフォワーディング使用方法

以下のコンポーネント／DOM があるとする。

- button（DOM）
- フォワーディングコンポーネント
  - `button`を管理
- 親コンポーネント
  - フォワーディングコンポーネントの親コンポーネント
  - `button`を ref で DOM 参照したい

必要な実装は以下の通り。

- フォワーディングコンポーネント
  - [React.forwardRef][]を使ってコンポーネントを作成する
  - [React.forwardRef][]に渡すレンダー関数のパラメータ`ref`を`button`に渡す
- 親コンポーネント
  - [React.createRef][]で`ref`を作成する
  - フォワーディングコンポーネントに`ref`を渡す

実装内容は[こちら](./../sandbox/src/pages/forwarding-refs/)を参照。

[react.forwardref]: https://ja.reactjs.org/docs/react-api.html#reactforwardref
[react.createref]: https://ja.reactjs.org/docs/react-api.html#reactcreateref
