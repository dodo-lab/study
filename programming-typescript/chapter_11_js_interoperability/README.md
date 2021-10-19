# 11章 JavaScriptとの相互運用

## JavaScriptからTypeScriptへの移行

### プロジェクトにTSCを追加する

JavaScriptもコンパイル対象にするため、`tsconfig.json`を以下のようにする。

```json
{
  "compilerOptions": {
    "allowJs": true
  }
}
```

### 既存のJavaScriptコードの型チェックをする

JavaScriptの型チェックを有効にするため、`tsconfig.json`を以下のようにする。

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  }
}
```

型チェックを有効化したことで大量のエラーが発生する場合は、`// @ts-check`ディレクティブ(ファイルの先頭に記述)を追加することで、１つのJavaScriptファイルに絞ってチェック可能。
もしくは`checkJs`をオンにしたまま、型チェックを除外したいファイルに対して`// @ts-nocheck`ディレクティブを追加し、指定のJavaScriptファイルを型チェックの対象外とすることが可能。

JavaScriptコードをコンパイルする場合、以下のようにTypeScriptよりも寛大な推論アルゴリズムを使う。

- すべての関数パラメータはオプション(省略可能)
- 関数やクラスのプロパティの型は、次のように使用法から推論される

```javascript
// 使用法からxは、number | string | string[] と推論される
class A {
  x = 0;
  method() {
    this.x = 'foo';
  }
  otherMethod() {
    this.x = ['array', 'of', 'strings']
  }
}
```

- オブジェクト／クラス／関数を宣言した後で、追加のプロパティをそれらに割り当てることが可能。内部でTypeScriptは、それぞれのクラスや関数の宣言に対応する名前空間を生成し、すべてのオブジェクトリテラルにインデックスシグネチャを自動的に追加することで実現している。

### JavaScriptコードをTypeScriptコードに１ファイルずつ移行する

JavaScriptファイルの拡張子を`.ts`に変更し、TSCのエラーを解消していく。
また、tsconfig.jsonの`noImplicitAny`をオンにすることでanyを抽出し、正しい型付けを行う。

### TypeScriptの型チェックを厳格にする

一通りTypeScriptコードへの移行ができたら、tsconfig.jsonを以下のように変更し、より厳格な型チェックを行う。

```json
{
  "compilerOptions": {
    "allowJs": false,
    "checkJs": false,
    "strict": true
  }
}
```

### [番外編]JSDocアノテーションで型付けをする

以下のように、JSDocアノテーションを追加することで、TypeScriptに型を伝えられる

```javascript
/**
 * @param word {string} 変換すべき入力文字列
 * @returns {string} パスカルケースの文字列
 */
export function toPascalCase(word) {
  return word.replace(
    /\w+/g,
    ([a, ...b]) => a.toUpperCase() + b.join('').toLowerCase()
  );
}

// JSDocアノテーションなし：(word: any) => any
// JSDocアノテーションあり：(word: string) => string
```

サポートされているJSDocアノテーションは[公式](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc)を参照

## JavaScriptの型の探索

TypeScriptファイルからJavaScriptファイルをインポートする場合、TypeScriptはJavaScriptコードの型宣言を探索するために、次のようなアルゴリズムに従う。

### JavaScriptファイルが同一プロジェクト内に存在する場合

以下の優先順位で型推論を試みる。

1. `.js`ファイルと同じフォルダに存在する、同じ名前の`.d.ts`ファイルを探す。存在していれば、`.js`ファイルの型宣言として`.d.ts`ファイルを使う。

   ```text
   my-app/
    ├ src/
    │  ├ index.ts
    │  └ legacy/
    │     ├ old-file.js
    │     └ old-file.d.ts
   ```

   例えば上記のようなフォルダ構成で、`old-file.js`をインポートすると`old-file.d.ts`を型宣言のソースとして使う。

   ```javascript
   // index.ts
   import './legacy/old-file.js';
   ```

1. tsconfig.jsonの`allowJs`と`checkJs`が`true`であれば、型推論をする。`.js`ファイルの中にJSDocアノテーションがあれば、その情報を用いて型推論する。
1. モジュール全体を`any`として扱う。

### サードパーティーのJavaScriptモジュールを利用する場合

node_modulesにインストールしたnpmパッケージをインポートする場合、上記とは少し異なるアルゴリズムとなる。以下の優先順位で型推論を試みる。

1. 対象モジュール用のローカルの型宣言を探す。もし存在していれば、それを使う。
   例えば、フォルダ構成が次のようなものだとする。

   ```text
   my-app/
    ├ node_modules/
    │  └ foo/
    ├ src/
    │  ├ index.ts
    │  └ types.d.ts
   ```

   そして、`types.d.ts`が次のようなものだとする。

   ```javascript
   // types.d.ts
   declare module 'foo' {
     let bar: {}
     export default bar
   }
   ```

   fooをインポートすると、fooの型ソースとして、`types.d.ts`の中のアンビエントモジュール宣言を使う。

   ```javascript
   // index.ts
   import bar from 'foo'
   ```

1. 対象モジュールの`package.json`を参照する。そこに`types`または`typings`というフィールドが定義されていれば、そのフィールドが指している`.d.ts`ファイルを型宣言ソースとして使う。もし対象モジュールのルートに`index.d.ts`ファイルが存在していれば、同様に型宣言ソースとして使う。
1. ディレクトリを１つずつ調べ、対象モジュール用の型宣言を持つ`node_modules/@types`ディレクトリを探す。例えば、Reactをインストールしたと仮定する。

   ```shell
   npm i react
   npm i -D @types/react

   my-app/
    ├ node_modules/
    │  ├ @types/
    │  │  └ react/
    │  └ react
    ├ src/
    │  └ index.ts
   ```

   Reactをインポートするときに`@types/react`フォルダを探し、それをReact用の型宣言ソースとして使う。

   ```javascript
   // index.ts
   import React from 'react'
   ```

1. [JavaScriptファイルが同一プロジェクト内に存在する場合](./#JavaScriptファイルが同一プロジェクト内に存在する場合)のステップ1～3に進む。
