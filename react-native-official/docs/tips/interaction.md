# Interaction | React Native Docs

## [Touchables](https://reactnative.dev/docs/handling-touches#touchables)

ボタンを独自に実装したい場合は`Touchable`コンポーネントのいずれかを利用することで実現可能。`Touchable`コンポーネントはタップジェスチャーをキャプチャする機能を提供し、ジェスチャーを検知した際にそれに対するフェードバックを表示できる。

- TouchableHighlight

  タップしている最中、ボタンが少し暗くなる。

- TouchableOpacity

  タップしている最中、ボタンの透明度が下がり、透けて見えるようになる。

- TouchableWithoutFeedback

  フィードバックがない。タップジェスチャーのキャプチャだけ利用したい場合に有用。

- TouchableNativeFeedback

  Android 固有のフィードバック表現を提供。

ジェスチャー検知には`onPress`props に関数を渡す。もし一定時間押し続けたことを検知したい場合は、`onLongPress`props に関数を渡す。
