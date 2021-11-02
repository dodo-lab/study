# React 公式 MAIN CONCEPTS

React 公式の[MAIN CONCEPTS](https://ja.reactjs.org/docs/hello-world.html)から抜粋。

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

※詳細は[公式](https://ja.reactjs.org/docs/lists-and-keys.html#keys-must-only-be-unique-among-siblings)を参照

## フォーム

input / textarea / select の入力イベント処理は、実装済のため[こちら](./form/)を参照。

### 制御された入力における null 値

input 等のタグの value プロパティに`null`もしくは`undefined`を指定すると、編集可能となる。
例として以下のコードで示す。最初は入力フィールドがロックされ、１秒後に編集可能となる。

```js
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function () {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

※詳細は[公式](https://ja.reactjs.org/docs/forms.html#controlled-input-null-value)を参照

## React の流儀

### state 管理の判断

コンポーネントでデータを持つ際、どれを state として管理するかを判断する必要がある。
以下、３つの質問をすることで state 管理対象かを判断する。質問に対していずれか Yes であれば、state 管理対象にすべきでない。すべて No であれば、state 管理対象として検討する。

1. 親から props を通じて与えられたデータか？
2. 時間経過で変化しないデータか？
3. コンポーネント内にある他の props や state を使って算出可能なデータか？

※詳細は[公式](https://ja.reactjs.org/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state)を参照

### state の配置場所の判断

どのコンポーネントが state を所有すべきかの判断過程は以下の通り。

1. 対象の state を使用するすべてのコンポーネントを確認する
2. 上記 1 で抽出したコンポーネント群の「共通の親コンポーネント」を探す
3. 共通の親コンポーネントか、さらに上位のコンポーネントが state を持つべき
4. もし state を持つに適したコンポーネントが見つからない場合、state を保持するだけのコンポーネントを作り、上記 2 で見つけた「共通の親コンポーネント」に配置する

※詳細は[公式](https://ja.reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live)を参照
