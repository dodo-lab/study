# The Basics | React Native Docs

## [Core Components](https://reactnative.dev/docs/intro-react-native-components#core-components)

React Native にはフォームコントロールからアクティブインジケータまで、多くの Core Components がある。主に以下の Core Components を扱うことになる。

| React Native   | Android        | iOS              | Web                     |
| -------------- | -------------- | ---------------- | ----------------------- |
| `<View>`       | `<ViewGroup>`  | `<UIView>`       | スクロールしない`<div>` |
| `<Text>`       | `<TextView>`   | `<UITextView>`   | `<p>`                   |
| `<Image>`      | `<ImageView>`  | `<UIImageView>`  | `<img>`                 |
| `<ScrollView>` | `<ScrollView>` | `<UIScrollView>` | `<div>`                 |
| `<TextInput>`  | `<EditText>`   | `<UITextField>`  | `<input type="text">`   |

- View

  flexbox によるレイアウト、スタイル、一部のタッチ操作、アクセシビリティコントロールをサポートするコンテナ

- Text

  文字列を表示する。スタイル、文字列のネスト、タッチイベントも可能

- Image

  画像を表示する

- ScrollView

  複数のコンテナや View を格納できる、汎用スクロールコンテナ

- TextInput

  テキスト入力ができる
