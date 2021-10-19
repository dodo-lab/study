# 12 章 TypeScript のビルドと実行

## TypeScript のビルド

サーバー向け／ブラウザ向け／npm 向け、環境によらず核となる概念について説明。

### プロジェクトのレイアウト

TypeScript のソースコードを最上位の`src/`フォルダに保存し、それを最上位の`dist/`フォルダにコンパイルすることを推奨。このフォルダ構造は慣例的に使われており、ソースコードとコンパイルによって生成されるコードとを２つの最上位フォルダに分けることで、以下のメリットがある。

- 他ツールと統合する場合に作業が容易になる
- 生成される成果物をソース管理から除外することが容易になる

```text
my-app/
 ├ dist/
 │  ├ index.js
 │  └ services/
 │     ├ bar.js
 │     └ foo.js
 ├ src/
 │  └ index.ts
 │  └ services/
 │     ├ bar.ts
 │     └ foo.ts
```

### TSC の成果物

TypeScript コードを JavaScript にコンパイルする際、TSC はいくつかの種類の成果物を生成する。

| 種類         | 拡張子    | tsconfig.json のフラグ         | デフォルトで発行されるか？ |
| ------------ | --------- | ------------------------------ | -------------------------- |
| JavaScript   | .js       | {"emitDeclarationOnly": false} | Yes                        |
| ソースマップ | .js.map   | {"sourceMap": true}            | No                         |
| 型宣言       | .d.ts     | {"declaration": true}          | No                         |
| 宣言マップ   | .d.ts.map | {"declarationMap": true}       | No                         |

- ソースマップ
  生成された JavaScript を、生成元の TypeScript ファイルの特定の行／列へとリンクするファイル。コードをデバッグしたり、JavaScript 例外のスタックトレース内の行と列を TypeScript ファイルへマップすることが可能。

- 型宣言
  生成された型を、他の TypeScript プロジェクトから利用できるようにする。

- 宣言マップ
  TypeScript プロジェクトのコンパイル時間を短縮するために使われる。

### コンパイルターゲットの指定

すべての JavaScript 環境がすべての JavaScript の機能を標準でサポートしている訳ではないが、JavaScript の最新バージョンでコードを書くべき。そのために次の２つの方法がある。

- トランスパイル
  最新バージョンの JavaScript から、ターゲットとするプラットフォームがサポートしている最も古い JavaScript バージョンに自動変換する。例えば`for..of`ループや`async/await`を、`for`ループや`then`に自動変換する。

- ポリフィル
  使用している JavaScript ランタイムに欠けている機能を提供する。
  TSC ではサポートしていないため、以下のような方法で対応する。
  - [core-js](https://www.npmjs.com/package/core-js)のようなポリフィルライブラリーからインストール
  - [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill/)を使って、型チェック済の TypeScript コードを Babel にかけて、自動的にポリフィルをコードに追加

TSC は古い JavaScript バージョンへのトランスパイルを標準サポートしているが、ポリフィルは対応していない。
TSC では、どの環境をターゲットとするかを指定するための３つの設定が提供されている。

- target
  トランスパイル先となる JavaScript バージョンを設定する。
  例）es5、es2020、esnext

- module
  ターゲットとしたいモジュールシステムを設定する。
  例）CommonJS、es2020、UMD

- lib
  ターゲットとする環境でどの JavaScript 機能を利用できるかを設定する。この設定によって、設定された機能が実装される訳ではないが、ポリフィルを介して利用可能であることを TypeScript に伝えている。
  例）es2020、dom、es6
