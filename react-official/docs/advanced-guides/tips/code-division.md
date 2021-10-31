# コード分割

webpack 等で生成されるバンドルは、アプリの規模に比例してバンドルサイズが大きくなる。
特にサイズの大きなサードパーティ製のライブラリを含む場合、顕著にサイズが増大する。
それにより、アプリの読み込みに多くの時間を要する事態になりかねない。

あらかじめコードを分割することで、これらの問題を回避する。
コード分割はユーザーが必要なコードだけを`遅延読み込み`する手助けとなる。初期ロードの際に読み込むコード量を削減でき、パフォーマンスの改善に繋がる。

## 動的 import

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

## React.lazy

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

## ルーティング単位でのコード分割

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
