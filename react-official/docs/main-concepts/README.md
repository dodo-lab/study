# React 公式 MAIN CONCEPTS

React 公式の[MAIN CONCEPTS](https://ja.reactjs.org/docs/hello-world.html)を見て個人的に重要と感じたポイントをまとめる。

## JSX

### JSX はインジェクション攻撃を防ぐ

```js
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

デフォルトで、React DOM は JSX に埋め込まれた値をレンダー前にエスケープする。
レンダーの前に全てが文字列に変換され、XSS 攻撃の防止に役立つ。

※詳細は[公式](https://ja.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)を参照

## 条件付きレンダー

### 論理 && 演算子によるインライン if

```js
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

JavaScript では`true && expression`は必ず`expression`と評価され、`false && expression`は必ず`false`と評価される。そのため、条件部分が`true`であれば、`&&`の後に書かれた要素が出力される。

※詳細は[公式](https://ja.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)を参照

### コンポーネントのレンダーを防ぐ

他のコンポーネントによってレンダーされているにも関わらず、コンポーネントが自分のことを隠したいというケースの場合、レンダー出力の代わりに`null`を返せばよい。

※詳細は[公式](https://ja.reactjs.org/docs/conditional-rendering.html#preventing-component-from-rendering)を参照

## リストと key

### key は兄弟要素の中で一意であればよい

配列内で使われる key はその兄弟要素の中で一意である必要がある。
ただし、グローバルに一意である必要はない。２つの異なる配列を作る場合は同一の key が使われても構わない。
