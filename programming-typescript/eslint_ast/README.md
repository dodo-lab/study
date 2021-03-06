# ESLint と ASC

## TypeScript プロジェクトでの ESLint 利用

### プロジェクト作成とパッケージインストール

```shell
# npm プロジェクトを初期化
npm init -y

# TypeScript をインストール
npm i -D typescript

# tsconfig.json を作成
npx tsc --init

# ESLint関連のパッケージをインストール
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- @typescript-eslint/eslint-plugin

  ESLint の TypeScript 用プラグイン

- @typescript-eslint/parser

  TypeScript を ESlint が理解できるようパースする役割を担う

### ESLint の新規導入

ESLint による設定は、JavaScript / JSON / YAML の形式で、`.eslintrc.*`というファイルに記述する。他にも、コマンドラインから任意の設定ファイル名の指定や、`package.json`ファイルの`eslintConfig`フィールドに設定を記述することが可能。
ESLint や ESLint の TypeScript 用プラグインに定義されたお勧めのルールは簡単に使えるため、それらをベースに必要に応じてルールを追加すれば良い。お勧めルールをそのまま使う場合は次のように記述する(.eslintrc.json に記述)。

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ]
}
```

- root

  このファイルの配置された場所がプロジェクトのルートであることを示す。
  ESLint は設定ファイルで、`root: true`が指定されていないと、親フォルダの設定ファイルを探しにいき、ファイルシステムの最上位まで繰り返す。プロジェクトのルートの設定ファイルで`root: true`を指定することで、それより上位フォルダの探索を回避できる。

- parser

  ESLint が TypeScript コードを理解できるよう、`@typescript-eslint/parser`パッケージをパーサーに指定する。

- parserOptions.project

  `tsconfig.json`の場所を指定する。
  extends で`plugin:@typescript-eslint/recommended-requiring-type-checking`を指定しない場合は省略可能。

- plugins

  `@typescript-eslint/plugin`パッケージをプラグインに指定し、そこに含まれるルールを利用できるようにする。

- extends

  外部の設定ファイルで指定されたルール群を有効にする。

- eslint:recommended

  ESLint 本体に含まれる、JavaScript と共通のお勧めルール。

- plugin:@typescript-eslint/eslint-recommended

  `@typescript-eslint/eslint-plugin`パッケージに含まれる`eslint-recommended`ルールを有効にし、`eslint:recommended`に含まれるルールのうち、TypeScript の型チェッカーでカバーできるものを無効にする。

- plugin:@typescript-eslint/recommended

  `@typescript-eslint/eslint-plugin`パッケージに含まれる、TypeScript 特有のお勧めルールのうち、型チェックが不要なルールを有効にする。

- plugin:@typescript-eslint/recommended-requiring-type-checking

  `@typescript-eslint/eslint-plugin`パッケージに含まれる、TypeScript 特有のお勧めルールのうち、型チェックが必要なルールを有効にする。例えば、不必要な型アサーションが指定されている時に警告を出す`@typescript-eslint/no-unnecessary-type-assertion`というルールが含まれる。型チェックが必要な分、リントに時間を要するため、そのトレードオフを考慮して有効にするか決めるべき。

### TSLint からの移行

すでに TSLint を導入しているプロジェクトを ESLint へ移行する際は、`tslint-to-eslint-config`パッケージでスムーズに移行できる。

- tslint-to-eslint-config

  `tslint.json`や`tsconfig.json`の各種設定ファイルの内容を元に、ESLint の設定ファイルを生成する。
  各種設定ファイルが存在するフォルダにて、次のコマンドで実行する。

  ```shell
  npx tslint-to-eslint-config
  ```

ただし、これだけで TSLint の設定が完全に再現できる訳ではない。すべてのルールをそのまま列挙で ESLint に移行することはできないため、実行時にいくつか警告が出る場合がある。
移行先の ESLint で存在しないようなルールを使っている場合は、内部的に TSLint を使ってリントする`@typescript-eslint/eslint-plugin-tslint`パッケージを使う設定が出力される。この場合、手動で`@typescript-eslint/eslint-plugin-tslint`をインストールする必要がある。このほかにも、ESLint 本体に含まれないルールに変換された場合は、そのルールを含むプラグインを別途インストールしなければならない。いずれも実行時のログに必要な対応が出力されるため、その内容に基づいて対応する。

## TypeScript 向け独自ルールの実装

ESLint を利用するとき、ほとんどの場合は ESLint 本体やサードパーティのプラグインが提供するルールだけで事足りが、もし独自ルールが必要になった場合はここで解説する方法で実装可能。

### 実装するルールの仕様

TypeScript では、クラスのコンストラクタ引数で public や readonly のような修飾子を付けると、それが自動的にクラスのプロパティになる。これは、ECMAScript 標準にはない TypeScript の独自機能のため、利用を避けたいケースを想定し、上記機能を違反として検出するルールを実装する。

たとえば、次のコードでは`ng`で始まる変数名の箇所がルール違反として検出される。

```ts
declare const foo: Function;

class MyClass {
  private ok1 = 1;
  ok2 = !this.ng1;

  constructor(
    ok3: string,
    public readonly ng1: boolean, // NG
    @foo protected ng2 = 1, // NG
    private ng3?: RegExp // NG
  );
}
```

### ESLint と AST

ESLint はリントの際、ソースコードをパースして AST を生成する。各ルールは生のソースコードではなく、パース結果の AST に対してリントを行う。
JavaScript の AST の仕様としては、[ESTree][link-estree]がデファクトスタンダードとなっている。ESLint のデフォルトのパーサーである[Espree](https://github.com/eslint/espree)も、[ESTree][link-estree]に準拠し、かつ ESLint の機能に必要な追加情報を保持した AST[^1] を出力する。これがどのようなものか確認するには、[AST Explorer][link-ast-exp]というツールを使うのが便利。ブラウザで[AST Explorer][link-ast-exp]を開き、ページ上部のパーサー選択の UI(デフォルトで`acorn`が選択されている)にマウスオーバーし、`espree`を選択する。さらに、ページ左側に`const a = 1`と入力してみると、ページ右側に`Espree`がパースした結果の AST が表示される。

[^1]: ESLint が要求する AST の仕様の詳細は[公式ドキュメント](https://eslint.org/docs/developer-guide/working-with-custom-parsers#the-ast-specification)を参照

[link-estree]: https://github.com/estree/estree
[link-ast-exp]: https://astexplorer.net/
