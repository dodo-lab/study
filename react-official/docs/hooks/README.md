# React 公式 HOOKS

React 公式の[HOOKS](https://ja.reactjs.org/docs/hooks-intro.html)から抜粋。

各種 HOOKS の実装については、[こちら](./sandbox/src/pages/)を参照。

## [フックのルール](https://ja.reactjs.org/docs/hooks-rules.html)

### フックを呼び出すのは React 関数のトップレベルのみ

フックをループや条件分岐、あるいはネストされた関数内で呼び出してはいけない。React 関数のトップレベルのみ呼び出すこと。これを守ることで、コンポーネントがレンダーされる際に**毎回同じ順序で呼び出されること**が保証される。

React 関数とは以下の２つを指す。

- React の関数コンポーネント
- カスタムフックの関数
