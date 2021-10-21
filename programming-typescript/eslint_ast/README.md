# TSLint と ASC

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
