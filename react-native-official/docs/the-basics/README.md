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

## [Metro Bundler のポートが既に使われていた場合](https://reactnative.dev/docs/troubleshooting#port-already-in-use)

Metro Bundler は`8081番ポート`で動作する。他のプロセスが既にそのポートを使っている場合、以下いずれかの対応が必要。

- 8081 番ポートを使っている他のプロセスを終了させる
- Metro Bundler の使用するポートを変更する

Metro Bundler の使用するポートを変更するには以下のコマンドで実行する。

```shell
npx react-native start --port=8088

# もし 'react-native init' で作成したプロジェクトであれば、下記でもOK
npm start -- --port=8088
```

## [プラットフォーム固有制御](https://reactnative.dev/docs/platform-specific-code)

### Platform モジュール

Platform モジュールを使うことで、プラットフォーム固有の制御が可能になる。

```js
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});
```

#### Platform.select メソッド

key に`ios` / `android` / `native` / `default`のいずれかを指定したオブジェクトを渡すと、現在実行しているプラットフォームに最も適した値を返す。

- プラットフォーム固有のスタイルを適用

  ```js
  import { Platform, StyleSheet } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      ...Platform.select({
        ios: {
          backgroundColor: 'red',
        },
        android: {
          backgroundColor: 'green',
        },
        default: {
          // other platforms, web for example
          backgroundColor: 'blue',
        },
      }),
    },
  });
  ```

- プラットフォーム固有のコンポーネントを適用

  ```js
  const Component = Platform.select({
    ios: () => require('ComponentIOS'),
    android: () => require('ComponentAndroid'),
    native: () => require('ComponentForNative'),
    default: () => require('ComponentForWeb'),
  })();

  <Component />;
  ```

### Android のバージョン検出

Android では以下のようにバージョンを検出することができる。

```js
import { Platform } from 'react-native';

if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}
```

`Platform.Version`で取得できるバージョンは Android OS のバージョンではなく、Android API のバージョンになる。Android OS と Android API のバージョン紐付けをするには、[Android Version History](https://en.wikipedia.org/wiki/Android_version_history#Overview)を参照。

### iOS のバージョン検知

iOS では以下のようにバージョンを検出することができる。

```js
import { Platform } from 'react-native';

// メジャーバージョンを検出
const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}
```

`Platform.Version`は、現在の OS のバージョンを示す文字列が格納されている。
