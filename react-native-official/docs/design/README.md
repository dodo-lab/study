# Design | React Native Docs

## [Flexbox によるレイアウト](https://reactnative.dev/docs/flexbox)

コンポーネントは、Flexbox アルゴリズムを使用して子のレイアウトを指定できる。Flexbox は異なる画面サイズでも一貫したレイアウトを実現するよう設計されている。

通常、適切なレイアウトを実現するために、`flexDirection` / `alignItems` / `justifyContent` を組み合わせて使用する。

いくつかの例外を除き、React Native でも Web 上の CSS と同じような動きをする。例えば、以下のようにデフォルト値や設定範囲が異なる。

| プロパティ    | React Native               | Web(CSS)             |
| ------------- | -------------------------- | -------------------- |
| flexDirection | column                     | row                  |
| alignContent  | flex-start                 | stretch              |
| flexShrink    | 0                          | 1                    |
| flex          | 1 つの数値設定のみサポート | 複数の設定をサポート |
