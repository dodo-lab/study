# Ref

Ref はレンダーされた DOM ノードもしくは React 要素にアクセスする方法を提供する。

※詳細は[公式](https://ja.reactjs.org/docs/refs-and-the-dom.html)を参照

## いつ Ref を使うか

Ref に適した使用例は以下の通り。

- フォーカス、テキストの選択
- メディアの再生
- アニメーションの発火
- サードパーティの DOM ライブラリとの統合

例えば、`Dialog`コンポーネントに`open()`と`close()`メソッドを実装するかわりに、`isOpen`プロパティを渡すべき。

## 使用方法

- Ref の作成と要素への紐付け

  Ref は`React.createRef()`で作成し、ref 属性を用いて DOM ノード／React 要素に紐付ける。

- Ref へのアクセス

  上述の通り、Ref の作成と要素への紐づけをすると、作成した Ref の`current`属性で対象要素へアクセスできるようになる。

実装内容は[こちら](./../sandbox/src/pages/ref/)を参照。
