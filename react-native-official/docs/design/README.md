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

### 静的な非画像のリソース

上述の`require`構文は、オーディオ／ビデオ／ドキュメントなどのファイルをプロジェクトへ静的に組み込むためにも使用できる。`.mp3` / `.wav` / `.mp4` / `.html` / `.pdf` など、一般的なファイルタイプがサポートされている。すべてのリストは[こちら](https://github.com/facebook/metro/blob/main/packages/metro-config/src/defaults/defaults.js#L14-L44)を参照。

また、[Metro の設定](https://facebook.github.io/metro/docs/configuration/)で[assetExts](https://facebook.github.io/metro/docs/configuration/#assetexts)の Resolver Options を追加すると、他のファイルタイプをサポートできる。

### [ネットワーク上の画像リソース](https://reactnative.dev/docs/images#network-images)

ネットワーク上の画像を表示する場合、静的リソースとは異なり、画像のサイズを手動で指定する必要がある。

```js
// GOOD
<Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 400, height: 400}} />

// BAD
<Image source={{uri: 'https://reactjs.org/logo-og.png'}} />
```

#### [ネットワーク上の画像に対するリクエスト](https://reactnative.dev/docs/images#network-requests-for-images)

画像のリクエスト時に、HTTP メソッド／HTTP ヘッダ／Body などを渡したい場合は`source`オブジェクトにこれらのプロパティを設定することで実現する。

```js
<Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  }}
  style={{ width: 400, height: 400 }}
/>
```

### [URI データの画像を表示](https://reactnative.dev/docs/images#uri-data-images)

REST API からエンコードされた画像データを取得して、表示するケースがある。`data` uri scheme を使用することで、実現可能。ネットワークリソースと同様に画像のサイズを手動で指定する必要がある。また、この方法は小さくて動的な画像にのみ推奨される。

```js
<Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
  }}
/>
```

## [Colors](https://reactnative.dev/docs/colors)

### [Color の表現方法](https://reactnative.dev/docs/colors#color-representations)

#### RGB / RGBA

React Native では 16 進法と関数記法の両方で、RGB と RGBA の表現をサポートしている。

- `'#f0f'` (#RGB)
- `'#ff00ff'` (#RRGGBB)
- `'#f0ff'` (#RGBA)
- `'#ff00ffff'` (#RRGGBBAA)
- `0xff00ffff` (0xRRGGBBAA)
- `'rgb(255, 0, 255)'`
- `'rgba(255, 0, 255, 1.0)'`

#### HSL (Hue Saturation Lightness)

React Native では 関数記法で、HSL と HSLA の表現をサポートしている。

- `'hsl(360, 100%, 100%)'`
- `'hsl(360, 100%, 100%, 1.0)'`

#### Color 名の文字列指定

React Native では Color 名 の文字列指定での表現をサポートしている。ただし、小文字の Color 名のみサポートしている。サポート対象の Color は[CSS3/SVG の仕様](https://www.w3.org/TR/css-color-3/#svg-color)に準拠。

例外として、`'transparent'`も指定可能。これは透明色を表す。
