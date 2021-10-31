# フラグメント

コンポーネントの DOM のルートには複数の要素を設定できない制約がある。それにより、例えば`div`タグが余分に増えてしまい、パフォーマンスへの悪影響や不正な HTML になってしまう可能性がある。

- フラグメントを使わない場合

  ```js
  // Table.js
  function Table() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
  ```

  ```js
  // Columns.js
  function Columns() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
  ```

  上記の例では、Columns で余計な`div`が DOM に追加されてしまう。その結果、以下のように不正な HTML として出力されてしまう。（`tr`の子要素は`td`であるべき）

  ```html
  <table>
    <tr>
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    </tr>
  </table>
  ```

フラグメントを使うことで、DOM に余分な要素を追加することなく、本来追加すべき要素だけを反映することができる。

- フラグメントを使用する場合

  ```js
  // Columns.js
  function Columns() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
  ```

  Table.js はフラグメントを使用しない場合と同様。Columns コンポーネントの`div`を`React.Fragment`にした結果、HTML 出力は以下のように不要な要素（`div`）が追加されなくなる。
  ※フラグメントの省略記法として`<>・・・</>`という書き方も可能。

  ```html
  <table>
    <tr>
      <td>Hello</td>
      <td>World</td>
    </tr>
  </table>
  ```

※詳細は[公式](https://ja.reactjs.org/docs/fragments.html)を参照

## key 付きフラグメント

明示的に`<React.Fragment>`と宣言したフラグメントでは key を持つことが可能。これはコレクションをフラグメントの配列に変換するときに有用。

```js
function Glossary(props) {
  return (
    <dl>
      {props.items.map((item) => (
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```
