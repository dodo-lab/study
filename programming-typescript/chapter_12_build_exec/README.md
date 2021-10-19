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
