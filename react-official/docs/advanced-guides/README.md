# React 公式 ADVANCED GUIDES

React 公式の[ADVANCED GUIDES](https://ja.reactjs.org/docs/accessibility.html)を見て個人的に重要と感じたポイントをまとめる。

## コード分割

webpack 等で生成されるバンドルは、アプリの規模に比例してバンドルサイズが大きくなる。
特にサイズの大きなサードパーティ製のライブラリを含む場合、顕著にサイズが増大する。
それにより、アプリの読み込みに多くの時間を要する事態になりかねない。

あらかじめコードを分割することで、これらの問題を回避する。
コード分割はユーザーが必要なコードだけを`遅延読み込み`する手助けとなる。初期ロードの際に読み込むコード量を削減でき、パフォーマンスの改善に繋がる。

### 動的 import

- before

  ```js
  import { add } from './math';

  console.log(add(16, 26));
  ```

- after

  ```js
  import('./math').then((math) => {
    console.log(math.add(16, 26));
  });
  ```

webpack がこの構文を見つけると、自動的にアプリのコードを分割する。

※詳細は[公式](https://ja.reactjs.org/docs/code-splitting.html#import)を参照

### React.lazy

React.lazy 関数を使用すると、動的インポートを通常のコンポーネントとしてレンダーできる。

- before

  ```js
  import OtherComponent from './OtherComponent';
  ```

- after

  ```js
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  ```

このコンポーネントがはじめてレンダーされる時、`OtherComponent`を含むバンドルを自動的にロードしてくれる。また、`OtherComponent`はデフォルトエクスポートしている必要がある。以降、React.lazy で遅延ロードしたコンポーネントのことを、`遅延コンポーネント`と記述する。

遅延コンポーネントは`Suspense`コンポーネント内でレンダーされる必要がある。これにより、遅延コンポーネントのローディング待機中にフォールバック用のコンテンツを表示できる。

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

`fallback`プロパティは遅延コンポーネントのローディング待機中に表示したいあらゆる React 要素を受け取る。`Suspense`コンポーネントは遅延コンポーネントより上位であれば、どこでも配置可能。また、複数の遅延コンポーネントを単一の`Suspense`コンポーネントでラップすることも可能。

※詳細は[公式](https://ja.reactjs.org/docs/code-splitting.html#reactlazy)を参照

### ルーティング単位でのコード分割

コード分割の導入に適している場所はルーティング。下記は、`React Router`のようなルーティングライブラリを使ったアプリに、`React.lazy`でルーティングベースのコード分割を導入する方法例。

```js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);
```

※詳細は[公式](https://ja.reactjs.org/docs/code-splitting.html#route-based-code-splitting)を参照

## コンテキスト

コンテキストは各階層から手動でプロパティを下位層へ渡すことなく、コンポーネントツリー内でデータを渡す方法を提供する。

実装内容は[こちら](./sandbox/src/pages/context/)を参照。

### コンテキストをいつ使用すべきか

コンテキストは、React コンポーネントツリーに対して`グローバル`とみなすことができるデータを共有するために設計されている。`グローバル`なデータの例としては、認証済ユーザ／テーマ／優先言語が挙げられる。

## Error Boundary

Error Boundary は自身の子コンポーネントツリーで発生した JavaScript エラーをキャッチするコンポーネント。その際に、エラーの記録とクラッシュしたコンポーネントツリーの代わりにフォールバック用の UI を表示する。

※詳細は[公式](https://ja.reactjs.org/docs/error-boundaries.html)を参照

- キャッチ対象のエラー

  - レンダー中
  - ライフサイクルメソッド内
  - コンストラクタ内

- キャッチ対象外のエラー

  - イベントハンドラ
  - 非同期コード（例：`setTimeout`や`requestAnimationFrame`のコールバック）
  - サーバサイドレンダリング
  - Error Boundary 自身がスローしたエラー

### Error Boundary の使用方法

クラスコンポーネントに、ライフサイクルメソッドの`static getDerivedStateFromError()`か`componentDidCatch()`のいずれか（または両方）を定義すると、Error Boundary になる。

- static getDerivedStateFromError()

  エラーがスローされた後、フォールバック UI をレンダーするために使用。

- componentDidCatch()

  エラー情報をログに記録するために使用。

実装内容は[こちら](./sandbox/src/pages/error-boundary/)を参照。

### エラーがキャッチされなかった場合の動作

React16 から、どの Error Boundary でもエラーがキャッチされなかった場合に React コンポーネントツリー全体がアンマウントされるようになった。

## ref のフォワーディング

ref のフォワーディングはあるコンポーネントを通じて、その子コンポーネントのひとつに ref を渡すテクニック。これは基本的にはアプリケーション内のほとんどのコンポーネントで必要ない。ただし、コンポーネントの種類によっては使用した方が良いケースもある。特に再利用可能なコンポーネントライブラリにおいては、便利なものとなるかもしれない。

※詳細は[公式](https://ja.reactjs.org/docs/forwarding-refs.html)を参照

### ref のフォワーディング使用方法

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

実装内容は[こちら](./sandbox/src/pages/forwarding-refs/)を参照。

[react.forwardref]: https://ja.reactjs.org/docs/react-api.html#reactforwardref
[react.createref]: https://ja.reactjs.org/docs/react-api.html#reactcreateref

## フラグメント

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

### key 付きフラグメント

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

## 高階コンポーネント

高階コンポーネント(higher-order component：HOC)はコンポーネントのロジックを再利用するための、React における応用テクニック。これは React API の一部ではなく、あくまで設計パターンの１つ。

実装内容は[こちら](./sandbox/src/pages/higher-order-components/)を参照。

※詳細は[公式](https://ja.reactjs.org/docs/higher-order-components.html)を参照

### HOC の注意事項

- 静的メソッドは必ずコピーすること

  HOC をコンポーネントに適用すると、元のコンポーネントはラップされる。つまりラップしたコンポーネントは元のコンポーネントの静的メソッドを１つも持っていないということになる。
  この問題の解決策としては、[hoist-non-react-statics](https://github.com/mridgway/hoist-non-react-statics)を使用することで、すべての非 React の静的メソッドを自動的にコピーできる。

- ref 属性は渡されない

  HOC の通例として、すべての props はラップされたコンポーネントに渡されるが、ref に関しては渡されない。この解決方法は、[React.forwardRef][]を利用すること。

## JSX

JSX は`React.createElement`のシンタックスシュガーにすぎない。

例えば JSX をこのように記述すると…

```js
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

以下のようにコンパイルされる。

```js
React.createElement(MyButton, { color: 'blue', shadowSize: 2 }, 'Click Me');
```

JSX がどのように JavaScript へ変換されるかテストしたい場合は、[オンライン Babel コンパイラ](https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA)で試すことができる。

※詳細は[公式](https://ja.reactjs.org/docs/jsx-in-depth.html)を参照

### ユーザ定義のコンポーネントの名前は大文字で始める

ある要素の型が小文字から始まっている場合、それは`<div>`や`<span>`のような組込みのコンポーネントを参照しているとコンパイラが判断する。これらは、`'div'`や`'span'`といった文字列に変換され、`React.createElement`に渡される。

一方、`<Foo />`のように大文字で始まる型は`React.createElement(Foo)`にコンパイルされ、定義あるいはインポートされたコンポーネントを参照する。

- プロパティのデフォルト値は true

  プロパティに値を設定しない場合、デフォルト値は`true`になる。そのため、以下２つの JSX 式は等しい。

  ```js
  <MyTextBox autocomplete />

  <MyTextBox autocomplete={true} />
  ```

### JSX でドット記法を使用する

JSX の中でドット記法を用いてコンポーネントを参照することが可能。これはモジュールが多数のコンポーネントをエクスポートしているような場合に便利。

```js
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
  // etc...
};

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

### JSX における子要素

開始タグと終了タグの両方を含む JSX 式において、タグに囲まれた部分は`props.children`という特別なプロパティとして渡される。

- 関数を渡すことも可能

  `props.children`に渡すデータは、文字列／React 要素のような React がレンダーできるものに限らない。独自コンポーネントに`props.children`を通してコールバックを定義することも可能。

  ```js
  // numTimes の数だけ子要素のコールバックを呼び出し、コンポーネントを繰り返し作成する
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }

  function ListOfTenThings() {
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    );
  }
  ```

- 真偽値／null／undefined は無視される

  `true`と`false`／`null`／`undefined`は子要素として渡すことができる。ただし、これらは何もレンダーしない。

## パフォーマンス最適化

※詳細は[公式](https://ja.reactjs.org/docs/optimizing-performance.html)を参照

### 長いリストの仮想化

長いデータのリストをレンダーする場合、リスト全体から表示されている領域のみに絞って描画することで、パフォーマンス改善が見込める。具体的には生成する DOM ノードの数やコンポーネントの再描画に要する時間を大幅に削減可能。

人気があるリスト仮想化のライブラリは以下のようなものがある。

- [react-window](https://react-window.now.sh/)
- [react-virtualized](https://bvaughn.github.io/react-virtualized/)
