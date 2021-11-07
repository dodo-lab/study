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

## [Troubleshooting](https://reactnative.dev/docs/troubleshooting)

### [Metro Bundler のポートが既に使われていた場合](https://reactnative.dev/docs/troubleshooting#port-already-in-use)

Metro Bundler は`8081番ポート`で動作する。他のプロセスが既にそのポートを使っている場合、以下いずれかの対応が必要。

- 8081 番ポートを使っている他のプロセスを終了させる
- Metro Bundler の使用するポートを変更する

Metro Bundler の使用するポートを変更するには以下のコマンドで実行する。

```shell
npx react-native start --port=8088

# もし 'react-native init' で作成したプロジェクトであれば、下記でもOK
npm start -- --port=8088
```
