# React 公式 MAIN CONCEPTS

React 公式の[MAIN CONCEPTS](https://ja.reactjs.org/docs/hello-world.html)を見て個人的に重要と感じたポイントをまとめる。

## JSX

### JSX はインジェクション攻撃を防ぐ

```js
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

デフォルトで、React DOM は JSX に埋め込まれた値をレンダー前にエスケープする。
レンダーの前に全てが文字列に変換され、XSS 攻撃の防止に役立つ。

※詳細は[公式](https://ja.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)を参照
