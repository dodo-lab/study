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

## [Images](https://reactnative.dev/docs/images)

### [静止画像のリソース](https://reactnative.dev/docs/images#static-image-resources)

React Native は、Android / iOS アプリで画像やその他のメディアアセットを管理する統一的な方法を提供する。静止画像をアプリで表示するには、ソースコードツリーのどこかに配置し、以下のように参照する。

```js
<Image source={require('./my-icon.png')} />
```

画像の名前は、JS モジュールと同じ方法で解決される。上記の例で、バンドラは`my-icon.png`を必要とするコンポーネントと同じフォルダ内を探す。

`@2x`および`@3x`の接尾辞を付与することで、デバイスに応じた異なる画面密度の画像を表示することができる。例えば、以下のようなファイルがあったとする。

```text
.
├── button.js
└── img
    ├── check.png
    ├── check@2x.png
    └── check@3x.png
```

そして、画像を参照する`button.js`のコードは次の通り。

```js
<Image source={require('./img/check.png')} />
```

バンドラは、デバイスの画面密度に適した画像を提供する。例えば、`check@2x.png`は iPhone 7、`check@3x.png`は iPhone 7 Plus や Nexus 5 で使用される。

また、`require`で画像名を指定する際は静的な文字列を渡す必要がある。

```js
// GOOD
<Image source={require('./my-icon.png')} />;

// BAD
var icon = this.props.active ? 'my-icon-active' : 'my-icon-inactive';
<Image source={require('./' + icon + '.png')} />;

// GOOD
var icon = this.props.active
  ? require('./my-icon-active.png')
  : require('./my-icon-inactive.png');
<Image source={icon} />;
```
