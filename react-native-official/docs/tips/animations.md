# Animations | React Native Docs

React Native には２つの補完的なアニメーションシステムがある。

- Animated

  特定の値を細かくインタラクティブに制御する

- LayoutAnimation

  グローバルなレイアウトトランザクションをアニメーション化する

## [Animated](https://reactnative.dev/docs/animations#animated-api)

様々なアニメーションやインタラクションのパターンを、簡潔に表現できるように設計されている。Animated は入力と出力の間の関係に焦点を当てている。入力／出力間の変移における設定や、時間ベースのアニメーション実行を制御するための開始／停止メソッドを備えている。

Animated は、以下 6 つのアニメーション可能なコンポーネントを提供している。

- Animated.View
- Animated.Text
- Animated.Image
- Animated.ScrollView
- Animated.FlatList
- Animated.SectionList

`Animated.createAnimatedComponent()`を使って、独自のアニメーションコンポーネントを作成することも可能。
