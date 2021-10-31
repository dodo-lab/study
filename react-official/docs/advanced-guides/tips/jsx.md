# JSX

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

## ユーザ定義のコンポーネントの名前は大文字で始める

ある要素の型が小文字から始まっている場合、それは`<div>`や`<span>`のような組込みのコンポーネントを参照しているとコンパイラが判断する。これらは、`'div'`や`'span'`といった文字列に変換され、`React.createElement`に渡される。

一方、`<Foo />`のように大文字で始まる型は`React.createElement(Foo)`にコンパイルされ、定義あるいはインポートされたコンポーネントを参照する。

- プロパティのデフォルト値は true

  プロパティに値を設定しない場合、デフォルト値は`true`になる。そのため、以下２つの JSX 式は等しい。

  ```js
  <MyTextBox autocomplete />

  <MyTextBox autocomplete={true} />
  ```

## JSX でドット記法を使用する

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

## JSX における子要素

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
