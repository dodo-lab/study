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
