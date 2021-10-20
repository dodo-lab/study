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

### プロジェクト参照

アプリケーションの規模が大きくなるにつれて、TSC がコードの型チェックとコンパイルを行う時間は長くなる。これを解決するために、TSC にはコンパイル時間を劇的に速くするための`プロジェクト参照`と呼ばれる機能があり、次のように利用する。

1. TypeScript プロジェクトを複数のプロジェクトに分割する。１つのプロジェクトは、`tsconfig.json`といくつかの TypeScript コードを含んでいるフォルダとし、一緒に更新されることが多いコード同士を同じフォルダ内に配置する。

2. それぞれのプロジェクトフォルダの中に、少なくとも次のものを含む`tsconfig.json`を作成する。

   ```json
   {
     "compilerOptions": {
       "composite": true,
       "declaration": true,
       "declarationMap": true
     },
     "include": ["./**/*.ts"],
     "references": [
       {
         "path": "../myReferencedProject",
         "prepend": true
       }
     ]
   }
   ```

   各項目の説明は次の通り。

   - composite

     このプロジェクトが、より大きな TypeScript プロジェクトのサブプロジェクトであることを TSC に伝える。

   - declaration

     このプロジェクトに対して、`.d.ts`宣言ファイルを発行することを TSC に指示する。
     プロジェクト参照の機能では、プロジェクト同士は互いの宣言ファイルや出力された JavaScript にアクセスできるが、TypeScript コードにはアクセスできない。それにより、TSC がコードの型チェックやコンパイルを再度行わない境界が形成される。

   - declarationMap

     生成される型宣言に対してソースマップを作成することを TSC に指示する。
     型宣言のソースマップがあると、変数の定義元へのジャンプや変数名のリネームといったコードエディタの機能をサブプロジェクトにまたがって使えるようになる。

   - references

     このプロジェクトが依存するサブプロジェクトの配列。
     path は`tsconfig.json`を含んでいるフォルダ、または TSC の設定ファイルそのものを指す必要がある。
     prepend は参照しているサブプロジェクトで生成される JavaScript とソースマップに追加することを指示する。

3. 別のサブプロジェクトからまだ参照されていないすべてのサブプロジェクトを参照するルート`tsconfig.json`を作成する。

   ```json
   {
     "files": [],
     "references": [
       { "path": "./myFirstProject" },
       { "path": "./mySecondProject" }
     ]
   }
   ```

4. TSC でプロジェクトをコンパイルするときに、build フラグを使い、プロジェクト参照を考慮にいれるよう TSC に指示する。

   ```shell
   tsc --build
   # もしくは省略して、"tsc -b"でもOK
   ```

### エラー監視

TypeScript はコンパイル時にエラーについて警告するが、実行時エラーについても要因を特定するための手段が必要。[Sentry](https://sentry.io)や[Bugsnag](https://www.bugsnag.com/)のようなエラー監視ツールを使い、エラーの解析を行う。

## TypeScript をサーバー上で実行する

TypeScript コードを Node.js 環境で実行するには、`tsconfig.json`のモジュールフラグを`commonjs`に設定する。

```json
{
  "compilerOptions": {
    "target": "es2015",
    "module": "commonjs"
  }
}
```

上記の例では ES2015 の import と export の呼び出しが、それぞれ require と module.exports にコンパイルされ、追加のバンドルは必要とせずに Node.js 上で実行することができる。
ソースマップを使用している場合は、ソースマップを Node.js プロセスに供給する必要がある。npm から[source-map-support](https://www.npmjs.com/package/source-map-support)パッケージを取得し、セットアップの指示に従えばいい。
